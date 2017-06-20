"use strict;"
const expect = require('chai').expect;

describe("flaky test suite", () => {
  it("always passes", () => {
    expect(2).to.equal(2);
  });

  it("always fails", () => {
    expect(2).to.equal(5);
  });

  it("passess 50% of time", () => {
    const zeroOrOne = Math.floor((Math.random() * 2));
    expect(zeroOrOne).to.equal(1);
  });
});
