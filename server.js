//--- Assert load dependencies
//
const dotenv = require('dotenv');
const express = require('express');

//--- Assert load environment variables into process.env
//      ALL variables are prefixed with ENV_
//
dotenv.config({
  path: 'config/config.env'
});


//--- Assert global variables
//
const objServer = express();
const intPort = process.env.ENV_PORT || 5000; // if undefined

//--- Assert body server
//


//--- Assert final step run server
//
objServer.listen(
  intPort,
  console.log(`Server running in ${process.env.ENV_MODE} mode on port ${intPort}`)
);