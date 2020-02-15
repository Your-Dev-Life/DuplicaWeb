class Auth {
  constructor(api) {
    this.api = api;
  }

  doLogin(username, password) {
    return this.api.post('/auth/signin', {
      username,
      password,
    }).then(userDetails => {
      localStorage.setItem('userDetails', JSON.stringify(userDetails.data));
      return userDetails.data;
    });
  };

  doLogout() {
    localStorage.setItem('userDetails', null);
  };

  isAuthenticated() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
    return !!userDetails.token;
  };
}

export default Auth;
