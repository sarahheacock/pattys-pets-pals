# create-react-app with a Node server on Heroku

## Front-End
The front-end is built with react, redux, and react-router. The editing modal appears when the react’s edit state contains a copy of the content the client needs to edit. The edited copy is then uploaded to the mongo database when editing is complete and the object passes the back-end's middleware.

## Back-End
The back-end is built with express and is connected to a mongo database. JSON web tokens are used to authenticate admin upon login. Routes are ordered in the same catch all system as the Pediatric Balance Scale site. This allows for server-side and client-side rendering. I hope to further improve performance by upgrading to an isomorphic solution later.

## Local Development

### Run the API Server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```


### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```
