const fetch = require('node-fetch');
const express = require('express');

const router = express.Router();

const Sensor = require('../models/Sensor');
const { convertDate } = require('../utils/date');

//  TODO: export to .env
const key = '2a4ca16b7d1a5936e10cb825beb8f826';

// GET all sensors
router.get('/', (req, res) => {
  Sensor.find({})
    .then((allSensors) => {
      res.status(200).send({ status: 200, data: allSensors, message: 'GET all sensors succeeded!' });
    })
    .catch((mongoErr) => {
      res.status(400).send({ status: 400, data: mongoErr, message: 'GET all sensors failed!' });
    });
});

// POST new sensor
router.post('/add', (req, res) => {
  let requestURL = `https://api.darksky.net/forecast/${key}/${req.body.latitude},${req.body.longitude}`;

  const date = convertDate(req.body.time, req.body.date, req.body.timezone);
  if (date) {
    requestURL += `,${date}`;
  }

  const fetchOptions = {
    method: 'GET',
    // headers: {},        // request headers. format is the identical to that accepted by the Headers constructor (see below)
    // body: null,         // request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
    // redirect: 'follow', // set to `manual` to extract redirect headers, `error` to reject redirect
  };

  fetch(requestURL, fetchOptions)
    .then(async (response) => {
      const weatherJson = await response.json();

      const hourlyData = weatherJson.hourly.data;
      const timezone = weatherJson.timezone;
      const latitude = weatherJson.latitude;
      const longitude = weatherJson.longitude;
      const currentTime = weatherJson.currently.time;

      const document = {
        current_time: currentTime,
        hourly_data: hourlyData,
        timezone,
        latitude,
        longitude,
      };

      // Sensor
      Sensor.create(document)
        .then((newSensorDocument) => {
          // res.status(201).send({ status: 201, data: newSensorDocument, message: 'Dark Sky API data retrieval succeeded!' });
          res.status(201).send({ status: 201, data: newSensorDocument, message: 'POST new temperature sensor succeeded!' });
        })
        .catch((mongoErr) => {
          res.status(400).send({ status: 400, data: mongoErr, message: 'POST new temperature sensor failed!' });
        });
    })
    .catch((error) => {
      res.status(500).send({ status: 500, data: error, message: 'Dark Sky API data retrieval failed!' });
    });
});

// DELETE sensor
router.delete('/:id', (req, res) => {
  const deleteId = req.params.id;
  Sensor.remove({ _id: deleteId })
    .then(() => {
      res.status(200).send({ status: 200, data: null, message: 'DELETE temperature sensor succeeded!' });
    })
    .catch((mongoErr) => {
      res.status(400).send({ status: 400, data: mongoErr, message: 'DELETE temperature sensor failed!' });
    });
});

module.exports = router;
