const pdfReader = require("./../index.js").pdfReader;

/*
 * To test the working of pdf reader function
*/
describe('PDF reader', function() {
  it('Reading PDF ... ', function(done) {
    pdfReader()
      .then(t => t)
      .then(done())
      .catch(err => done(err));
  });
});
