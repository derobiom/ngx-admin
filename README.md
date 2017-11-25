
# Fork of ngx-admin with <a href="https://github.com/auth0/auth0.js?files=1">auth0-js</a> integration for authentication and authorization <a href="https://github.com/akveo/ngx-admin">ngx-admin</a>

<h4>Instructions:</h4>
1. Please add environment files in the /src/app/environments directory:<br>
<br>
environment.prod.ts<br>
environment.ts<br>
You will need to integrate your own Auth0 variables in these environment files according to the example in the included files "environement.format".<br>
<br>
2. Enter your Auth0 authorize endpoint in a proxy.config.json file in the root directory.  <br>
<br>
3. Use "npm start" to run the project.  This will invode the server in https mode (using the dev certs included with the project) and will use the proxy config above to get around the cors limitations.  Any backend api that you call will have to be included in the proxy scheme also.






