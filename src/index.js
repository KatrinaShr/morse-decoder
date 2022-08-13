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
    let result = [];
    let a = '.';
    let b = '-';

    for (let i=0; i<array.length; i+=10) {
        let result = array.slice(i, i+10);
        arrayDecimal.push(Number(result.join('')) || ' ');
    } 

    let array2 = arrayDecimal.map(x=> String(x));

    for (let j=0; j<array2.length; j++) {

        let k=0;
        while (k<array2[j].length) {
            if (array2[j][k] + array2[j][k+1]  === '10') { result.push.('.')}
            if (array2[j][k] + array2[j][k+1]  === '10') { result.push('.')}
            else if (array2[j][k] + array2[j][k+1]  === '11') {result.push('-')}
            else ' ';
            k++;
            result.join('');
        }
        
        // for (let k=0; k<array2[j].length; k+=2) {
        //   array2[j]  === ' ' ? find.push(' ') : (array2[j][k] + array2[j][k+1]  === '10' ? find.push('.') : find.push('-'));  
        // }  
    }
   
    return result;
    //return arrayDecimal;
    }

console.log(decode("0000101010000000101100101010110000000010**********00000011110000000010"))

module.exports = {
    decode
}