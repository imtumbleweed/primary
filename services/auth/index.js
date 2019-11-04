const { google } = require("googleapis");
const queryString = require("query-string");

class GoogleAuthService {
  constructor(client_id, client_secret, redirect_url) { 
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


	googleUrlGenerator() {
    // generate a url that asks permissions for people scopes
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

	getPeopleApi(oauth){
   return google.people({ version: 'v1', auth: oauth })
	}

	//parse request url to extract code
	//and generate authorization tokens
  async parseUrl(codeUrl){
		try {
			let code = queryString.parse(codeUrl)["/auth/google/callback?code"];
			const data = await this.oauth2Client.getToken(code)
			return data
		} catch (error) {
			console.error(error)
		}
	}

	
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

