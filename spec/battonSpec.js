var superagent = require("superagent");
var fs = require("fs");

var url = 'http://lh3.ggpht.com/zjnnvZZdGfB6zDiluJzoP44dgxn-s_5IzAQpRvhPa1rGpLi2WaaId2VCyWl2B0Mac_ZgZdUIKuR45Iz-iy7WscxCePSsbEgvTBQlf_bE'

describe('Batton', function() {
  describe('POST /upload', function() {
    describe('upload is successful', function(){
      var response;

      beforeEach(function(done) {
        superagent.post('http://localhost:5000/upload')
        .send({
          url: url,
          name: 'test.png'
        })
        .end(function(error, res) {
          response = res;
          done();
        });
      });

      afterEach(function() {
        fs.unlink('./public/images/test.png', function(err) {
          if (err) throw err;
          console.log('deleted ./public/images/test.png')
        })
      });

      it('saves an image to the public/images directory', function() {
        fs.exists('./public/images/test.png', function(exists) {
          expect(exists).toBe(true);
        });
      });

      it('returns the remote location of the image', function(){
        expect(response.text).toBe('http://localhost:5000/public/images/test.png');
      });

    })
  });
});
