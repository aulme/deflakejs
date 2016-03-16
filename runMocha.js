const Mocha = require('mocha');

module.exports = (files) => {
  return new Promise((res, rej) => {
    var tests = [];

    function reporter(runner) {
      runner.on('pass', function(test) {
        try {
          tests.push({
            file: test.file,
            type: test.type,
            body: test.body,
            file: test.file,
            duration: test.duration,
            state: test.state,
            title: test.title,
            pass: true
          });
        } catch (e) {
          rej(e);
        }
      });

      runner.on('fail', function(test, err) {
        try {
          tests.push({
            file: test.file,
            type: test.type,
            body: test.body,
            file: test.file,
            duration: test.duration,
            state: test.state,
            title: test.title,
            pass: false,
            err: err
          });
        } catch (e) {
          rej(e);
        }
      });

      runner.on('end', function() {
        try {
          res(tests);
        } catch (e) {
          rej(e);
        }
      });

    }

    const mocha = new Mocha().reporter(reporter);
    files.forEach(file => mocha.addFile(file));
    mocha.run();
  });
}
