const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = [];
  let exprArr = [];

  for (let i = 0; i < expr.length; i += 10) {
    exprArr.push(expr.slice(i, i + 10).padStart(10, "0"));
  }

  exprArr.forEach((element) => {
    if (element === "**********") {
      result.push(" ");
    } else {
      let currentCode = [];
      for (let i = 0; i < element.length; i += 2) {
        let currentNum = "" + element[i] + element[i + 1];

        if (currentNum === "10") {
          currentCode.push(".");
        } else if (currentNum === "11") {
          currentCode.push("-");
        }
      }

      if (MORSE_TABLE[currentCode.join("")]) {
        result.push(MORSE_TABLE[currentCode.join("")]);
      }
    }
  });

  return result.join("");
}

module.exports = {
  decode,
};
