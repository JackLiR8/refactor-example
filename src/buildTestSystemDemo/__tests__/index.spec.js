import { Province, sampleProvinceData } from "../index";

describe("province", function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", function () {
    expect(asia.shortfall).toBe(5);
  });
  it("profit", function () {
    expect(asia.profit).toBe(230);
  });
  it("change production", function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
  });
  it("zero demand", function () {
    asia.demand = 0;
    expect(asia.shortfall).toBe(-25);
    expect(asia.profit).toBe(0);
  });
  it("negative demand", function () {
    asia.demand = -1;
    expect(asia.shortfall).toBe(-26);
    expect(asia.profit).toBe(-10);
  });
  it("empty string demand", function () {
    asia.demand = "";
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});

describe("no producers", function () {
  let noProducers;
  beforeEach(function () {
    const data = {
      name: "No proudcers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });
  it("shortfall", function () {
    expect(noProducers.shortfall).toBe(30);
  });
  it("profit", function () {
    expect(noProducers.profit).toBe(0);
  });
});
