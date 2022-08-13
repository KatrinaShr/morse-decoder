const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = expr.split('');
    let arrayDecimal = [];
    let resultDec = [];
    let result = [];
  
    for (let i=0; i<array.length; i+=10) {
        arrayDecimal.push(array.slice(i, i+10)); //разделение элем. по 10 в массиве
  
        for (let j=0; j<arrayDecimal.length; j++) {
            while (arrayDecimal[j][0] === '0' || arrayDecimal[j][0] === '*' ) { //удаление нулей слева
              arrayDecimal[j].shift(); 
              arrayDecimal.join(',');
            }
          }
    }
     for (let i=0; i<arrayDecimal.length; i++) {
        let findString = '';
         for (let j=0; j<arrayDecimal[i].length; j+=2) {
            
            if (arrayDecimal[i][j] === '') {
                findString += ' ';
            }
            
            else if (arrayDecimal[i][j] + arrayDecimal[i][j+1] === '10') { 
                findString += '.';
         }
             else if (arrayDecimal[i][j] + arrayDecimal[i][j+1] === '11') { 
                findString += '-';}
     }
     resultDec.push(findString);
      }

     resultDec.map(item => {return result += ((MORSE_TABLE[item]) || ' ')});
     return result;
    }

    module.exports = {
    decode
}