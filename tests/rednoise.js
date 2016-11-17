module.exports = {
  "Demo test": function (client) {
    client.url('http://rednoise.org/ad-auto-export')
      //.waitForElementVisible('#text', 5000)
      //.assert.containsText('#text', 'An image ad in an anchor in a div')
      .pause(500000)
      .end();
  }
};
