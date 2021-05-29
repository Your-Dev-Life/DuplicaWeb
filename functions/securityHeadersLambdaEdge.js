/* eslint-disable */
exports.handler = (event, context, callback) => {
  //Get contents of response
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  //Set new headers
  headers['strict-transport-security'] = [
    { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubdomains; preload' },
  ];
  // TODO The app is having issues with this CSP policy, we need to fix it in another story.
  // headers['content-security-policy'] = [
  //   {
  //     key: 'Content-Security-Policy',
  //     value:
  //       "default-src 'none'; img-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' https://fonts.googleapis.com; object-src 'none'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
  //   },
  // ];
  headers['x-content-type-options'] = [{ key: 'X-Content-Type-Options', value: 'nosniff' }];
  headers['x-frame-options'] = [{ key: 'X-Frame-Options', value: 'DENY' }];
  headers['x-xss-protection'] = [{ key: 'X-XSS-Protection', value: '1; mode=block' }];
  headers['referrer-policy'] = [{ key: 'Referrer-Policy', value: 'same-origin' }];

  //Return modified response
  callback(null, response);
};
