const fetch = require("node-fetch");

class FacebookAuthService {
  constructor({ app_id, redirect_uri, client_secret, state }) {
    this.client_id = app_id;
    this.redirect_uri = redirect_uri;
    this.client_secret = client_secret;
    this.state = state;
  }

	// A string value created by your app to maintain state between the request and callback
	
  /**
	 * generates login request.
	 * check documentation for optional parameters that can be passed.
	 * https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/
	 * @returns {string} url string
   */
  endpointUrl() {
    const url = `https://www.facebook.com/v5.0/dialog/oauth?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&state=${this.state}`;
    return url;
	}
	

 
  /**
	 * generates OAuth endpoint to get an access-token
   * @param  {string} code URL parameters.
   */
  tokenUrl(code) {
    const url = `https://graph.facebook.com/v5.0/oauth/access_token?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&client_secret=${this.client_secret}&code=${code}`;
    return url;
  }


	
  /**
	 * gets an access token using oauth endpoint
   * @param  {string} url OAuth endpoint
   */
  static async fetchToken(url) {
    try {
      const response = await fetch(url);
      const resJson = await response.json();
      return resJson;
    } catch (error) {
      console.error(error);
    }
  }


	
  /**
	 * performs automated checks on a tokens for verification
	 * The app_id and user_id fields help your app verify that the access token is valid for the person and for your app
   * @param  {string} token user access token
   */
  async verifyToken(token) {
    try {
      const url = `https://graph.facebook.com/debug_token?input_token=${token}&access_token=${this.client_id}|${this.client_secret}`;
      const response = await fetch(url);
			let verifications = await response.json();
			const { app_id, user_id } = verifications.data;
      if (app_id === this.client_id) {
        return {
					message: "token verified",
					user_id
        };
      }
    } catch (error) {
      console.error(error);
    }
  }


  
  /**
	 * fetch person data using grah api
   * @param  {string} access_token user access token
   */
  async graphApi(access_token) {
    try {
      const url = `https://graph.facebook.com/me?access_token=${access_token}&fields=id,name,email`;
      const response = await fetch(url);
			const person = await response.json()
			return person
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = { FacebookAuthService };const fetch = require("node-fetch");

class FacebookAuthService {
  constructor({ app_id, redirect_uri, client_secret, state }) {
    this.client_id = app_id;
    this.redirect_uri = redirect_uri;
    this.client_secret = client_secret;
    this.state = state;
  }

	// A string value created by your app to maintain state between the request and callback
	
  /**
	 * generates login request.
	 * check documentation for optional parameters that can be passed.
	 * https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/
	 * @returns {string} url string
   */
  endpointUrl() {
    const url = `https://www.facebook.com/v5.0/dialog/oauth?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&state=${this.state}`;
    return url;
	}
	

 
  /**
	 * generates OAuth endpoint to get an access-token
   * @param  {string} code URL parameters.
   */
  tokenUrl(code) {
    const url = `https://graph.facebook.com/v5.0/oauth/access_token?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&client_secret=${this.client_secret}&code=${code}`;
    return url;
  }


	
  /**
	 * gets an access token using oauth endpoint
   * @param  {string} url OAuth endpoint
   */
  static async fetchToken(url) {
    try {
      const response = await fetch(url);
      const resJson = await response.json();
      return resJson;
    } catch (error) {
      console.error(error);
    }
  }


	
  /**
	 * performs automated checks on a tokens for verification
	 * The app_id and user_id fields help your app verify that the access token is valid for the person and for your app
   * @param  {string} token user access token
   */
  async verifyToken(token) {
    try {
      const url = `https://graph.facebook.com/debug_token?input_token=${token}&access_token=${this.client_id}|${this.client_secret}`;
      const response = await fetch(url);
			let verifications = await response.json();
			const { app_id, user_id } = verifications.data;
      if (app_id === this.client_id) {
        return {
					message: "token verified",
					user_id
        };
      }
    } catch (error) {
      console.error(error);
    }
  }


  
  /**
	 * fetch person data using grah api
   * @param  {string} access_token user access token
   */
  async graphApi(access_token) {
    try {
      const url = `https://graph.facebook.com/me?access_token=${access_token}&fields=id,name,email`;
      const response = await fetch(url);
			const person = await response.json()
			return person
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = { FacebookAuthService };