var urls = require('./urls.js').urls;

module.exports = {
  AdCollector: function (client) {
    console.log('          Urls: '+start+'-'+end +' of '+ urls.length);

      /*.slice(start,end).forEach(function(url) {
            client.url(url)
                .pause(3000);
        });*/
    client.url('http://rednoise.org/ad-auto-export')
      .pause(5000)
      .assert.visible('body')
      .end();
  }
};
