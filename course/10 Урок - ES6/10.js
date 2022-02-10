// 10) Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней. 

function numberOfLetters(str, letter) {
    let count = 0;
    for(elem of str) {
        if(elem === letter) {
            count++;
        }
    }
    return count;
}

console.log(numberOfLetters('string', 'o'));
console.log(numberOfLetters('stringo', 'o'));
console.log(numberOfLetters('stringoo', 'o'));

