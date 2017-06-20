"use strict;"
const expect = require('chai').expect;

describe("passing test suite", () => {
  it("always passes", () => {
    expect(2).to.equal(2);
  });

  it("always passes too", () => {
    return Promise.resolve(5)
      .then(x => expect(x).to.equal(5));
  });
});
