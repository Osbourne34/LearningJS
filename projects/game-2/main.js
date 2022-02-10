const wrapper = document.querySelector('.wrapper');
const ball = document.querySelector('.ball');

wrapper.onclick = function (event) {

    // координаты поля относительно окна браузера
    let fieldCoords = this.getBoundingClientRect();

    // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
    // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
    let ballCoords = {
        top: event.clientY - fieldCoords.top - wrapper.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - wrapper.clientLeft - ball.clientWidth / 2
    };

    // запрещаем пересекать верхнюю границу поля
    if (ballCoords.top < 0) ballCoords.top = 0;

    // запрещаем пересекать левую границу поля
    if (ballCoords.left < 0) ballCoords.left = 0;


    // // запрещаем пересекать правую границу поля
    if (ballCoords.left + ball.clientWidth > wrapper.clientWidth) {
        ballCoords.left = wrapper.clientWidth - ball.clientWidth;
    }

    // запрещаем пересекать нижнюю границу поля
    if (ballCoords.top + ball.clientHeight > wrapper.clientHeight) {
        ballCoords.top = wrapper.clientHeight - ball.clientHeight;
    }



    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';

}