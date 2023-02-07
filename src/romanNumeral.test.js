import { convertToRomanFigure } from "./romanNumeral";

describe("convert numeric numbers to roman figures", () => {
  test("convert number 1 to Roman figure 1", () => {
    expect(convertToRomanFigure(1)).toBe("I");
    expect(convertToRomanFigure(7)).toBe("VII");
  });
});
