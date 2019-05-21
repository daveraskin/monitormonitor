const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const SpotifyWebApi = require('spotify-web-api-node');


require('dotenv').config()

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret:  process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/callback',
});

spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log(
      'Something went wrong when retrieving an access token',
      err.message
    );
  }
);

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
}

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.route('/').get((req, res) => {
	console.log("the / endpoint got hit somehow");
});

app.route('/callback').get((req, res) => {
	console.log("this is the callback route: ", req.body)
});


app.route('/api/search').post((req, res) => {
	console.log(req.body)
	spotifyApi.searchPlaylists(req.body.term)
		  .then(function(data) {
		  	console.log("data:" + JSON.stringify(data))
		    res.send(data.body.playlists.items);
		  }, function(err) {
		    console.log('Something went wrong!', err);
		  });
});

app.route('/api/search').get((req, res) => {
	spotifyApi.searchPlaylists("workout")
		  .then(function(data) {
		    res.send(data.body.playlists.items);
		  }, function(err) {
		    console.log('Something went wrong!', err);
		  });
});





app.listen(3000, () => {
	console.log('server started and listening on port 3000')
})