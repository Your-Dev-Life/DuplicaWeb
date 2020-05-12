const Auth = (request) => {
  const doLogin = (username, password) => {
    return request.post('/auth/signin', {
      username,
      password,
    }).then((userDetails) => {
      localStorage.setItem('userDetails', JSON.stringify(userDetails.data));
      return userDetails.data;
    });
  }

  const doLogout = () => {
    localStorage.removeItem('userDetails');
  }

  const isAuthenticated = () => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
    return !!userDetails.token;
  }

  const getToken = () => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
    return userDetails.token || '';
  }

  return {
    doLogin,
    doLogout,
    isAuthenticated,
    getToken,
  }
};

export default Auth;
