module.exports = {
  AdCollector: function (client) {
    console.log('          Urls: '+start+"-"+end);
    client.url('http://rednoise.org/adntest/simple.html')
      .pause(5000)
      .end();
  }
};
