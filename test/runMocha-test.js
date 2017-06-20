"use strict;"
const expect = require('chai').should();
const runMocha = require('../runMocha');
const path = require('path');

const alwaysPassSuite = path.join(__dirname, '/test-data/always-pass');
const alwaysFailSuite = path.join(__dirname, '/test-data/always-fail');

describe("runMocha", () => {
  it("runs a single test file", () => {
    return runMocha([alwaysPassSuite])
      .then(results => {
        results[0].state.should.equal('passed');
        results[1].state.should.equal('passed');
      });
  });

  it("is idepmpotent", () => {
    const assertion = attemptNo => results => {
        const extraErrMessage = `Running round ${attemptNo}`;
        results.length.should.equal(2, extraErrMessage);
        results[0].state.should.equal('passed', extraErrMessage);
        results[1].state.should.equal('passed', extraErrMessage);
      };

    const run1 = () => runMocha([alwaysPassSuite]).then(assertion(1));
    const run2 = () => runMocha([alwaysPassSuite]).then(assertion(2));

    return run1().then(run2);
  });
});
