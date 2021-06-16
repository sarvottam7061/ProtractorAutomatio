

//Asyncoronus Example of javaScript

describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
     
        expect(browser.getTitle()).toEqual('Super Calculator').then(function()
        {
            console.log("first step");
        })

        console.log("last step");


    });
  });