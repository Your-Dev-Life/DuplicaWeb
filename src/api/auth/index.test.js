import Auth from '.';

let request;
let expectedUserDetails;

describe('Auth', () => {
  beforeEach(() => {
    request = {
      post: jest.fn(),
    };
    expectedUserDetails = {
      username: 'Username',
      age: 33,
      token: 'userToken'
    };
  });

  test('should save user details in the store when do the login', async () => {
    request.post.mockResolvedValue({ data: expectedUserDetails });
    const auth = Auth(request);
    const result = await auth.doLogin('myUsername', 'myPassword');

    expect(expectedUserDetails).toEqual(result);
    expect(expectedUserDetails).toEqual(JSON.parse(localStorage.getItem('userDetails')));
  });

  test('should remove user details from the store when do the logout', async () => {
    request.post.mockResolvedValue({ data: expectedUserDetails });
    const auth = Auth(request);
    await auth.doLogin('myUsername', 'myPassword');

    expect(expectedUserDetails).toEqual(JSON.parse(localStorage.getItem('userDetails')));

    auth.doLogout();
    expect(localStorage.getItem('userDetails')).toBeNull();
  });

  test('should return true if the user is logged in', async () => {
    request.post.mockResolvedValue({ data: expectedUserDetails });
    const auth = Auth(request);
    await auth.doLogin('myUsername', 'myPassword');

    const result = auth.isAuthenticated();

    expect(result).toBeTruthy();
  });

  test('should return false if the user is logged out', async () => {
    request.post.mockResolvedValue({ data: expectedUserDetails });
    const auth = Auth(request);
    await auth.doLogin('myUsername', 'myPassword');
    auth.doLogout();

    const result = auth.isAuthenticated();

    expect(result).toBeFalsy();
  });
});
