class Slider {
    constructor(slider, countItems) {
        this.slider = document.querySelector(slider);
        this.countItems = countItems;
        this.init();
    }

    addSliderLine() {
        const items = Array.from(this.slider.children);
        this.slider.innerHTML = `<div class="slider__track"></div>`

        for (let item of items) {
            this.slider.children[0].append(item);
        }

        return document.querySelector('.slider__track');
    }

    setWidthSliderItems(sliderTrack, countItems) {

        for (let sliderItem of sliderTrack.children) {
            sliderItem.style.width = `${sliderTrack.offsetWidth / countItems}px`
            sliderItem.style.flexShrink = 0;
        }
    }

    createDots(countItems) {
        const lengthItems = document.querySelector('.slider__track').children.length;
        const dotsList = document.createElement('ul');
        dotsList.classList = 'slider__dots-list';

        for (let i = 0; i < lengthItems / countItems; i++) {
            const dotsItem = document.createElement('li');
            dotsItem.classList = 'slider__dots-item';
            if (i === 0) {
                dotsItem.classList = 'slider__dots-item active';
            }
            dotsList.appendChild(dotsItem);
        }

        this.slider.appendChild(dotsList);

        return document.querySelectorAll('.slider__dots-item');

    }

    moveSlider(dots, countItems) {
        const sliderTrack = document.querySelector('.slider__track');
        const sliderItem = sliderTrack.children[0];
        dots.forEach((item, index) => {
            item.addEventListener('click', () => {
                console.log(sliderItem.clientWidth);
                sliderTrack.style.transform = `translateX(${-sliderItem.offsetWidth * index * countItems}px)`
                dots.forEach(dots => dots.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }

    init() {
        this.setWidthSliderItems(this.addSliderLine(), this.countItems);
        this.moveSlider(this.createDots(this.countItems), this.countItems);
    }
}

const slider = new Slider('.slider', 4);

