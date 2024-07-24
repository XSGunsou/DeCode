const characterMap = {
  // Lowercase Mappings
  "a": "ฟ",
  "b": "ิ",
  "c": "แ",
  "d": "ก",
  "e": "ำ",
  "f": "ด",
  "g": "เ",
  "h": "้",
  "i": "ร",
  "j": "่",
  "k": "า",
  "l": "ส",
  "m": "ท",
  "n": "ื",
  "o": "น",
  "p": "ย",
  "q": "ๆ",
  "r": "พ",
  "s": "ห",
  "t": "ะ",
  "u": "ี",
  "v": "อ",
  "w": "ไ",
  "x": "ป",
  "y": "ั",
  "z": "ผ",
  ";": "ว",
  "1": "ๅ",
  "4": "ภ",
  "5": "ถ",
  "6": "ุ",
  "7": "ึ",
  "8": "ค",
  "9": "ต",
  "0": "จ",
  "-": "ข",
  "=": "ช",
  "[": "บ",
  "]": "ล",
  "{": "ฐ",
  ",": "ม",
  "|": "ฅ",
  "'": "ง",
  "<": "ฒ",
  ".": "ใ",
  ">": "ฬ",
  "/": "ฝ",
  "?": "ฦ",
  '\\': 'ฃ',
  
  // Uppercase Mappings
  "A": "ฤ",
  "B": "ฺ",
  "C": "ฉ",  
  "D": "ฏ",
  "E": "ฎ",
  "F": "โ",
  "G": "ฌ",
  "H": "็",
  "I": "ณ",
  "J": "๋",  
  "K": "ษ",
  "L": "ศ",
  "M": "?",
  "N": "์",
  "O": "ฯ",
  "P": "ญ",
  "Q": "๐",  
  "R": "ฑ",
  "S": "ฆ",
  "T": "ธ",
  "U": "๊",
  "V": "ฮ",
  "X": ")",  
  "Y": "ํ",
  "Z": "(",
  ":": "ซ", 
  "^": "ู",
  "W": '"', 
  '|': 'ฅ',
  
  // Thai Lowercase Mappings 
  "ๆ": "q",
  "ไ": "w",
  "ำ": "e",
  "พ": "r",
  "ะ": "t",
  "ั": "y",
  "ี": "u",
  "ร": "i",
  "น": "o",
  "ย": "p",
  "ฟ": "a",
  "ห": "s",
  "ก": "d",
  "ด": "f",
  "เ": "g",
  "้": "h",
  "่": "j",
  "า": "k",
  "ส": "l",
  "ผ": "z",
  "ป": "x",
  "แ": "c",
  "อ": "v",
  "ิ": "b",
  "ื": "n",
  "ท": "m",
  "": "",
  "": "",
  
  // Thai Uppercase Mappings 
  "๐": "Q",
  "ฎ": "E",
  "ฑ": "R",
  "ธ": "T",
  "ํ": "Y",
  "๊": "U",
  "ณ": "I",
  "ฯ": "O",
  "ญ": "P",
  "ฤ": "A",
  "ฆ": "S",
  "ฏ": "D",
  "โ": "F",
  "ฌ": "G",
  "็": "H",
  "๋": "J",
  "ษ": "K",
  "ศ": "L",
  "(": "Z",
  ")": "X",
  "ฉ": "C",
  "ฮ": "V",
  "ฺ": "B",
  "์": "N",
  "?": "M",
  '"': "W",
  "": "",
};

function convertMessage() {
  const inputText = document.getElementById('inputText').value;
  const outputText = document.getElementById('outputText');
  let convertedMessage = "";
  let specialMapping = false;

  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i];
    
    // check 
    if (char === '?') {
      if (i < inputText.length - 1) {
        const nextChar = inputText[i + 1];
        if (nextChar === 'k') {
          specialMapping = true;
        } else {
          specialMapping = false;
        }
      }
    }

    let convertedChar;
    if (specialMapping && char === '?') {
      convertedChar = 'ฦ';
    } else {
      convertedChar = characterMap[char] || char; // def if not mapped
    }

    convertedMessage += convertedChar;
  }

  outputText.textContent = convertedMessage;
}

