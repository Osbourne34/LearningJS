// 4) Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и faulse – если не слвпадает.

function makePassword(pass) {
    return () => pass == 'qwerty' ? true : false;
}

console.log(makePassword('qwerty')());
console.log(makePassword('12345')());