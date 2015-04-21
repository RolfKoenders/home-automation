
var Push = require('pushover-notifications');

module.exports = function pushUtil(options) {
    var virgilio = this;
    var utils = virgilio.namespace$('utils');

    utils.defineAction$(function pushMessage(push) {
        var push = new Push({
            token: push.token,
            user: push.user,
            update_sounds: push.update_sounds
        });

        return new Promise(function(resolve, reject) {
            push.send(push.message, function(err, result) {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

    });
};
