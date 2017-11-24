interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  signupCallbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '7Z8qwNSLvOr2Y73SZrouKVsbpXh7Sg0p',
  domain: 'moyesco.auth0.com',
  callbackURL: 'https://localhost:4200/#callback',
  signupCallbackURL: 'https://localhost:4200/#callback',
  apiUrl: 'https://datahax',
};


