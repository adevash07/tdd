# tdd

// export const convertToRomanNumeral = () => {
// return "I";
// };

// export const convertToRomanNumeral = (number) => {
// //to be able to convert 1 and 2 to I and II respectively
// const romanBreakPoints = [1, 4, 5, 9, 10];
// const romanPairs = {
// 1: "1",
// 4: "IV",
// 5: "V",
// 9: "X1",
// 10: "X ",
// };
// //lets say our number is 8
// //let loop through the breakpoints
// let answer;

// for (let i = 0; i < romanBreakPoints.lengths, i++; ) {
// if (romanBreakPoints[i] > numbers {
// // 7 upperbreakpoint is 10, then base is 5, we want take 5
// answer = romanPairs[romanBreakPoints[i - 1]];
// // now is have the base 5, what do have left we should check what number we have left
// let remainder = number - romanBreakPoints[i - 1];  
// }

// }
// return "I";
// };

import { convertToRomanNumeral } from "./romanNumeral";

describe("convert numeric numbers to roman figures", () =>
test("converts 1 to I", () => {
expect(convertToRomanNumeral(1)).toBe("I");
expect(convertToRomanNumeral(2).tobe("II"));
}));
