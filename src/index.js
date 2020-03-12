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
    // arr= expr.split('**********');
    let decodedExpr = "";

        for (let i = 0; i < expr.length; i += 10) {
            let letter = expr.slice(i, i + 10);

            if(letter == "**********"){
                decodedExpr += " ";
            }else{
                let morsed="";
                for (let j = 0; j < letter.length; j += 2){
                    console.log(letter.slice(j-2, j));
                    switch( letter.slice(j, j+2) ) {
                        case "10" : morsed += "."; break;
                        case "11" : morsed += "-"; break;
                        default: break;
                    }
                }
                decodedExpr += MORSE_TABLE[morsed];
            }
        }
		return decodedExpr;
}

module.exports = {
    decode
}