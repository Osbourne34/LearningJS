// 11) Создайте суперкласс Shape и его наследники Circle, Rectangle. Класс Shape содержит абстрактный метод draw() и переменную хранящую цвет. Классы Circle, Rectangle содержат координаты точек. Создать массив содержащий эти фигуры. В цикле нарисовать их (вызвать метод draw). Добавить метод equals() для классов Shape, Circle, Rectangle.

class Shape {
  constructor (x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  draw(x, y) {
  }
}

class Circle extends Shape {
  
}
class Rectangle extends Shape {

}