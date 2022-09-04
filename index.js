let getPassword = (length = 8, upcs = true, lwcs = true, sym = true) => {
  let defaultSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  let defaultLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let password = "";
  for (let i = 0; i < length; i++) {
    if (Math.floor(Math.random() * 2) == 0 && sym) {
      let x = Math.floor(Math.random() * 10);
      password += defaultSymbol[x];
    } else {
      let y = Math.floor(Math.random() * 26);
      if (upcs && lwcs)
        password +=
          Math.floor(Math.random() * 2) == 1
            ? defaultLetters[y].toUpperCase()
            : defaultLetters[y];
      if (upcs == false && lwcs) password += defaultLetters[y];
      if (upcs && lwcs == false) password += defaultLetters[y].toUpperCase();
    }
  }
  return password;
};

let upperCase = true;
let lowerCase = true;
let symbol = false;
let length = 8;

console.log(getPassword(10));
