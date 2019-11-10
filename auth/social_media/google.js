const { google } = require("googleapis");



class GoogleAuthService {
  constructor({client_id, client_secret, redirect_url}) { 
		this.client_id = client_id
		this.client_secret = client_secret
		this.redirect_url = redirect_url
		this.oauth2Client = (() => {
			return  new google.auth.OAuth2(
				this.client_id,
				this.client_secret,
				this.redirect_url
			);
		})()
	}

	
	/**
	 * googleUrlGenerator returns a url which will
	 * be returned to user when the endpoint is accessed
	 * The url that asks permissions for people scopes
	 */
	googleUrlGenerator() {
    const scopes = [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
		];
		
		const url = this.oauth2Client.generateAuthUrl({
			// 'online' (default) or 'offline' (gets refresh_token)
			access_type: "offline",
			prompt: "consent",
			scope: scopes
		})

		return {url}
	}

	/**
	 * 
	 * @param {*} oauth 
	 * call the google people api
	 */
	getPeopleApi(oauth){
   return google.people({ version: 'v1', auth: oauth })
	}


	/**
	 * 
	 * @param {*} code 
	 * recieves a query string from app callback
	 * and generates auth tokens
	 */
  async parseUrl(code){
		try {
			const data = await this.oauth2Client.getToken(code)
			return data
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * 
	 * @param {*} tokens 
	 * 
	 */
  async googleAuthService(tokens) {
		const oauth2Client = this.oauth2Client
		try {
		oauth2Client.setCredentials(tokens)
		const personApi = this.getPeopleApi(oauth2Client)

		const person = await personApi.people.get({
			resourceName: "people/me",
      personFields: 'emailAddresses,photos,names' 
		})
      return person
		} catch (error) {
			console.error(error)
		}
  }

}

module.exports = { GoogleAuthService }