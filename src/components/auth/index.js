class Auth {
  constructor(api) {
    this.api = api;
    this.localStorage = localStorage;
  }

  doLogin(username, password) {
    return this.api.post('/auth/signin', {
      username,
      password,
    }).then((userDetails) => {
      this.localStorage.setItem('userDetails', JSON.stringify(userDetails.data));
      return userDetails.data;
    });
  }

  doLogout() {
    this.localStorage.setItem('userDetails', null);
  }

  isAuthenticated() {
    const userDetails = JSON.parse(this.localStorage.getItem('userDetails')) || {};
    return !!userDetails.token;
  }
}

export default Auth;
