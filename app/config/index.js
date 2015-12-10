
var SECRETS = require('./secrets.json');

var config = {
    "http": {
        "port": 9080
    },
    "logger": {
        "level": "debug",
        "name": "domotica-server"
    },
    "services": {
        "doorbell": {
            "logging": true,
            "push": {
                "message": {
                    "message": "Ring Ring Ring",
                    "title": "Deurbel",
                    "sound": 'echo',
                    "priority": 1,
                    "retry": 30,
                    "expire": 60
                }
            }
        }
    }
};

config.secrets = SECRETS;
module.exports = config;
