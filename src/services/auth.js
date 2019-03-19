import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_REDIRECT,
  responseType: 'token id_token',
  scope: 'profile openid'
});

export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, info) => {
          if(err) return reject(err);
          resolve({
            token: results.idToken,
            username: info.nickname,
            picture: info.picture
          });
        });
      } else {
        reject(err || 'AUTHENTICATION ERROR');
      }
    });
  });
};
