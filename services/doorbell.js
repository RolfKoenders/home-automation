
var Push = require( 'pushover-notifications' );

module.exports = function doorbellService(options) {
    var virgilio = this;

    var server = virgilio.namespace$('server');
    var push = virgilio.namespace$('push');

    server.http.get('/api/doorbell')
        .addHandler(function handler(req, res) {
            var virgilio = this;
            virgilio.log$.info('Ring Ring');

            var push_msg = {
                message: "Ring Ring Ring",
                title: "Deurbel",
                sound: 'echo',
                priority: 1,
                retry: 30,
                expire: 60
            };

            var push = new Push({
                token: options.secrets.pushover.token,
                user: options.secrets.pushover.group_key,
                update_sounds: true
            });

            push.send(push_msg, function(err, result) {
                if(err) {
                    virgilio.log$.error(err, 'sending push error');
                    res.send(500, err);
                } else {
                    res.send(200, result);
                }
            });
        });
}
