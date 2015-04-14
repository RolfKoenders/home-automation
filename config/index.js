
var SECRETS = require('./secrets.json');
if(!SECRETS) {
    console.log('@@-- NO SECRETS FILE PROVIDED --@@');
}

var config = {
    "http": {
        "port": 9080
    },
    "logger": {
        "level": "debug",
        "name": "domotica-server"
    }
};
config.secrets = SECRETS;

module.exports = config;
