export const convertToRomanFigure = (number) => {
  //let's say our number is 7
  const romanBreakPoints = [1, 5, 10];
  const romanPairs = {
    1: "I",
    5: "V",
    10: "X",
  };

  let answer;

  //loop to our breakpoint and upper breakpoint, then upper breakpoint will be 10 and base will be 5
  for (let i = 0; i < romanBreakPoints.length; i++) {
    let base;
    let remainder;
    if (romanBreakPoints[i] > number) {
      base = romanBreakPoints[i - 1];
      answer += romanPairs[base];
      remainder = number - romanPairs[base]; //2
    }
  }
};
