const detailObj = function (designation, name, width, height) {
    this.designation = designation;
    this.name = name;
    this.width = width;
    this.height = height;
}

const detailOne = new detailObj('745112.123', 'Уголок', '135mm', '110mm');
const detailSecond = new detailObj('745134.256', 'Швеллер', '1500mm', '235mm');

console.log(detailOne);
console.log(detailSecond);