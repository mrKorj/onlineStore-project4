# Online Store
Full Stack project. NodeJS, Express, MongoDB, Angular.

Admin dashboard - manage products in store (add new, delete, edit).

User - all necessary actions for the user's purchases. (cart, order history, etc...)

## Instructions

* Run script, `setup-db.js` in MongoDB console. (MongoDB must be installed locally).
* Type in terminal `npm install`.
* Type in terminal npm `npm run i-client`
* Type `npm run start` to start both server and client.
* Open your browser and go to http://localhost:4200
* WIN!

### Optionally
* Type `npm run server` to start only server.
* Type `npm run client` to start only client.

  #### You can configure the ENV:

    Set secret key for JWT token.
    * Windows: `SET SECRET=your-secret`.
    * Linux/Mac: `EXPORT SECRET=your-secret`.
    
    defaults: SECRET = "secret".
    
    Set PORT for a server.
    * Windows: `SET PORT=your-port`.
    * Linux/Mac: `EXPORT PORT=your-port`.
    * go to `client/serverURL.ts` and change port manually.
    
    defaults: PORT = 4000.

    Set MongoDB url 
    * Windows: `SET MONGODB_URL=your-url`.
    * Linux/Mac: `EXPORT MONGODB_URL=your-url`.
    
    defaults: MONGODB_URL = 'mongodb://localhost:27017'
    
    Set DB Name
    * Windows: `SET DB_NAME=your-db-name`.
    * Linux/Mac: `EXPORT DB_NAME=your-db-name`.
    
    defaults: DB_NAME = 'onlineStore'

