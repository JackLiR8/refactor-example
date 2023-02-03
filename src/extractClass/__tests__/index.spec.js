import { TelephoneNumber } from "..";

describe("TelephoneNumber", () => {
  it("telephone equals", () => {
    const telephoneNumber = new TelephoneNumber("123", "456");
    const otherTelephoneNumber = new TelephoneNumber("123", "456");
    expect(telephoneNumber.equals(otherTelephoneNumber)).toBe(true);
  });
});
