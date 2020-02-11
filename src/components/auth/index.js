class Auth {
  constructor(api) {
    this.api = api;
  }

  doLogin(username, password) {
    return this.api.post('/auth/signin', {
      username,
      password,
    }).then(userDetails => {
      console.log('doLogin - User details', userDetails);
      localStorage.setItem('userDetails', userDetails);
      return userDetails;
    });
  };

  doLogout() {
    localStorage.setItem('userDetails', null);
  };

  isAuthenticated() {
    const userDetails = localStorage.getItem('userDetails') || {};
    return !!userDetails.token;
  };
}

export default Auth;
