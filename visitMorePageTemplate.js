var linksPerSite = 30,
    timer = 0;

module.exports = {

  'STEP 1 Log In': function(client) {
      client.url("http://www.google.com")
          .waitForElementVisible('#gb_70', 2000)
          .click("#gb_70")
          .pause(1000)
          .setValue('input[type=email]', urs + '@gmail.com')
          .click("#next")
          .pause(1000)
          .setValue('input[type=password]', 'adnauseamAdCollector')
          .click("#signIn")
          .pause(5000)
  },
  
  //temporary
  'STEP 2 Disable Flash': function(client) {
      client.url("chrome://plugins")
          .waitForElementVisible('#pluginTemplate', 2000)
          .click(".content div:nth-child(2) .plugin:nth-child(2) .plugin-actions a[i18n-content=disable]")
  },

    'STEP 3 Collect Ad' : function(client) {

        //Go through urls list
        console.log('          Urls: ' + start + '-' + end + ' of ' + urls.length);
        //2 times
        // for (var i = 0; i < 2; i++) {
            urls.slice(start, ++end).forEach(function(site) {
                client.url(site)
                    .waitForElementVisible('body', 5000, false)
                    .verify.elementPresent('body', "Pass:" + site)
                    .elements('tag name', 'a', function(res){visitMore(res,site,client)});

            });
        // }

        //STEP 3: Export JSON file to download
        client.url('http://rednoise.org/ad-auto-export')
            .pause(5000)
            .assert.visible('body')
    }


};

function visitMore(res, site, client) {
   var links = [];
   var totalLinksFound = res.value.length;
   var read = true;
  

   console.log("Total a tag:" + totalLinksFound);
   // console.log(res.value);

   res.value.forEach(function(element, i) {

       client.elementIdAttribute(element.ELEMENT, 'href', function(result) {
        
           var url = result.value; // Each link in the website

 
           if (read) {
               if (typeof(url) === "string") {

                   var matches = site && site.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                   var domain = matches && matches[1];

                   // console.log("[CHECK]" + url + domain);

                   if (links.length < linksPerSite && url.indexOf(domain) > 0) {
                       links.push(url);
                       console.log(links.length, url);
                   }
                   // else console.log("-------------- No Visit --------------")

               }

               if (i === totalLinksFound - 1 || links.length === linksPerSite) {
                   visitList(links, client);
                   read = false;
               }

           }

        

       });

   });
}

function visitList(urls, client) {
   timer++;

   console.log("-------------- Visit More " + +urls.length + " Links " + timer + " --------------");
   urls.forEach(function(url) {
       console.log("visit" + url);
       client.url(url)
           .waitForElementVisible('body', 5000, false)
           .verify.visible('body',"Pass:" + url);
   });
}