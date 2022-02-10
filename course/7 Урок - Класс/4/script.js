// 4) Определить класс Reader, хранящий такую информацию о пользователе библиотеки: ФИО, номер читательского билета, факультет, дата рождения, телефон. Методы takeBook(), returnBook().
// Разработать программу, в которой создается массив объектов данного класса. Перегрузить методы takeBook(), returnBook():
// - takeBook, который будет принимать количество взятых книг. Выводит на консоль сообщение "Петров В. В. взял 3 книги".
// - takeBook, который будет принимать переменное количество названий книг. Выводит на консоль сообщение "Петров В. В. взял книги: Приключения, Словарь, Энциклопедия".
// - takeBook, который будет принимать переменное количество объектов класса Book (создать новый класс, содержащий имя и автора книги). Выводит на консоль сообщение "Петров В. В. взял книги: Приключения, Словарь, Энциклопедия".
//  Аналогичным образом перегрузить метод returnBook(). Выводит на консоль сообщение "Петров В. В. вернул книги: Приключения, Словарь, Энциклопедия". Или  "Петров В. В. вернул 3 книги".

class Reader {
    constructor(fullName, numberOfTicket, faculty, date, tel) {
        this.fullName = fullName;
        this.numberOfTicket = numberOfTicket;
        this.faculty = faculty;
        this.date = date;
        this.tel = tel;
    }
    takeBook (num) {
        return `${this.fullName}, взял книг: ${num}`;
    }
    takeBook1 (book1, book2) {
        return `${this.fullName}, взял книги: ${book1}, ${book2}`;
    }
}

const user = new Reader ('Волков Евгений Алексеевич', '№1', 'Информатика', '1998-04-18', '998975071018');

console.log(user);
console.log(user.takeBook(5)); // кол-во книг.
console.log(user.takeBook1('Приключения', 'Словарь'));