var urls = require('./urls.js').urls;

module.exports = {

    "Demo test": function(client) {

        urls.forEach(function(url) {
            client.url(url)
                  .pause(3000);  
        });
        client.end();
    }

};
