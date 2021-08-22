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
// -----------------------------
let mas=[];
let strrez="";
for (let i = 0; i < expr.length; i+=10) {   // разбиваем сроку на массив слов по 10 символов
  mas.push(expr.substring(i,i+10));
  
}
//--------------------------------------------------------функция для  конвертации dec в морзянку + пробелы 
function mor(str) {
let twochar="";
let morze="";
let rez;
    for (let i = 0; i < str.length ; i+=2) {
        twochar=str.substring(i,i+2);
        if (twochar==="**") {
            return morze=" ";
        } else{
            twochar==="10" ?  morze+="." : false;
            twochar==="11" ?  morze+="-" : false;
        }
        
    }
    //  console.log ("ф-я mor"+morze);
     return morze;
      
}
//----------------------------------------------------------- конвертируем морзянку в букву
function decstr(str) {
  let slovo="";
  let s=str;
//   console.log("переданна строка "+s);
    for (let key in MORSE_TABLE) {
        // console.log(key);
        if (key===str) {
            // console.log("вход в цикл");
            slovo = MORSE_TABLE[key];
            //  console.log("присвоено значение "+slovo);
        }
        
    }
    // console.log(slovo);
    return slovo;
}


//-----------------------------------------------------------  собираем все стоку морзянки и пробелы 
for (let i = 0; i < mas.length ; i++) {
    if (mor(mas[i])===" ") {
        strrez+=mor(mas[i]);
        // console.log ("добавили пробел");
    } else {
        let temp = mor(mas[i]);
        strrez+= decstr(temp);
    }
   
    
}
// console.log(strrez);
return strrez;
//----------------------
}

module.exports = {
    decode
}