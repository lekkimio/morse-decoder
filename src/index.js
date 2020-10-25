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
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.substring(i, i + 10));
    }

    let arr2 = [];
    arr.forEach(function (element) {
        if (element === '**********') {
            arr2.push(' ');
        } else {
            let arr3 = [];
            for (i = 0; i < element.length; i += 2) {
                if (element[i] + element[i + 1] === '00') {
                } else if (element[i] + element[i + 1] === '10') {
                    arr3.push('.');
                } else {
                    arr3.push('-');
                }
            }
            arr2.push(arr3);
        }
    });
    let arr3 = [];
    arr2.forEach(function (element) {
        if (element !== ' ') {
            arr3.push(element.join(''));
        } else {
            arr3.push(element);
        }
    });

    let arr4 = [];
    arr3.forEach(function (element) {
        if (element !== ' ') {
            arr4.push(MORSE_TABLE[element]);
        } else {
            arr4.push(element);
        }
    });
    return arr4.join('');
}

module.exports = {
    decode
}
