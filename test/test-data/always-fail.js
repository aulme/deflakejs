"use strict;"
const expect = require('chai').expect;

describe("failing test suite", () => {
  it("always fails", () => {
    expect(2).to.equal(7);
  });

  it("always fails too", () => {
    return Promise.resolve(5).then(x => {
      expect(x).to.equal(10);
    });
  });
});
