const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  // current_time: { type: Date, required: true, default: Date.now },
  date_created: { type: Date, required: true, default: Date.now },
  current_time: { type: Number, required: true },
  hourly_data: [{
    time: { type: Number, required: true },
    summary: String,
    icon: String,
    temperature: { type: Number, required: true },
    apparentTemperature: Number,
  }],
  timezone: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  half_life: { type: Number, required: true, default: 0 },
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
