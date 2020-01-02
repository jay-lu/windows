const http = require('http');
const fs = require('fs');

const configHandler = require("./ConfigHandler");  
const tccHandler = require("./TccHandler");

const configFileName = process.argv[2];
const configs = configHandler.retrieveConfig(configFileName);

//start, monitor msg, responding, notify 'main manager' to start notifying carrier
const serverForTCC = tccHandler.startServer(configs); 
const serverForCarrier = carrierHandler.startServer(configs);


