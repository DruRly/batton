var superagent = require("superagent");
var fs         = require("fs");

var url = 'http://www.drurly.com/images/sinatra_screenshot.png'

describe('Batton', function() {
  describe('POST /upload', function() {
    describe('upload is successful', function(){
      var response;

      beforeEach(function(done) {
        superagent.post('http://localhost:8080/upload')
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
        })
      });

      it('saves an image to the public/images directory', function() {
        fs.exists('./public/images/test.png', function(exists) {
          expect(exists).toBe(true);
        });
      });

      it('returns the remote location of the image', function(){
        expect(response.text).toBe('http://localhost:8080/public/images/test.png');
      });

      it('makes the image publicly accessible', function(done){
        superagent.get('http://localhost:8080/public/images/test.png', function(res){
          expect(res.statusCode).toBe(200);
          done()
        });
      });

    })
  });
});
