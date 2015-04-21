
module.exports = function doorbellService(options) {
    var virgilio = this;
    var doorbellOptions = options.services.doorbell;
    var utils = virgilio.namespace$('utils');
    var services = virgilio.namespace$('services');

    services.http.get('/api/doorbell')
        .addHandler(function handler(req, res) {
            var virgilio = this;
            virgilio.log$.info('Ring Ring');

            utils.pushMessage({
                token: options.secrets.pushover.token,
                user: options.secrets.pushover.group_key,
                update_sounds: true,
                message: doorbellOptions.message
            })
            .then(function(result) {
                res.send(200, result);
            })
            .catch(function(err) {
                virgilio.log$.error(err, 'sending push error');
                res.send(500, err);
            });
        });
}
