const fetch = require('node-fetch');
const express = require('express');

const router = express.Router();

//  TODO: export to .env
const key = '2a4ca16b7d1a5936e10cb825beb8f826';
const time = new Date();

// GET ALL USERS
router.post('/add', (req, res) => {
  // const requestURL = `https://api.darksky.net/forecast/${key}/${req.body.latitude},${req.body.longitude},${req.body.time}`;
  // const requestURL = `https://api.darksky.net/forecast/${key}/${latitude},${longitude},${time}`;
  // const requestURL = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233,${time}`;
  // const requestURL = `https://api.darksky.net/forecast/${key}/42.3601,-71.0589,255657600`;
  const requestURL = 'https://api.darksky.net/forecast/2a4ca16b7d1a5936e10cb825beb8f826/37.8267,-122.4233';

  const fetchOptions = {
    method: 'GET',
    headers: {},        // request headers. format is the identical to that accepted by the Headers constructor (see below)
    body: null,         // request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
    redirect: 'follow', // set to `manual` to extract redirect headers, `error` to reject redirect

    // The following properties are node-fetch extensions
    follow: 20,         // maximum redirect count. 0 to not follow redirect
    timeout: 0,         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
    compress: true,     // support gzip/deflate content encoding. false to disable
    size: 0,            // maximum response body size in bytes. 0 to disable
    agent: null,         // http(s).Agent instance, allows custom proxy, certificate etc.
  };

  fetch(requestURL, fetchOptions)
    .then(async (response) => {
      const weatherJson = await response.json();
      res.status(201).send({ status: 201, data: weatherJson, message: 'Dark Sky API data retrieval succeeded!' });
    })
    .catch((error) => {
      res.status(500).send({ status: 500, data: error, message: 'Dark Sky API data retrieval failed!' });
    });
});

module.exports = router;
