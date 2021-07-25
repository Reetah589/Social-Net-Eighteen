const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./models/social-user')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-net', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

//Starting the script failed. This is probably not a problem with npm and need to add more coding.