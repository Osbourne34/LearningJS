class Slider {
    constructor(slider, option) {
        this.slider = document.querySelector(slider);
        this.option = option;
        this.init();
    }

    createSliderLine(slider) {
        let html = slider.innerHTML;
        let sliderLine = `<div class="slider__line"> ${html} </div>`
        slider.innerHTML = sliderLine;
    }

    length() {
        const sliderLine = document.querySelector('.slider__line');
        const length = sliderLine.children.length;

        return length;
    }

    setSliderLineWidth(length) {
        document.querySelector('.slider__line').style.width = `${this.slider.clientWidth * length}px`
    }

    createDots(length) {
        const ul = document.createElement('ul');
        ul.classList = 'slider__dots'

        for(let i = 0; i < length; i++) {
            const li = document.createElement('li');
            li.classList = 'slider__dots-btn'
            ul.append(li)
        }

        this.slider.append(ul);
    }

    init() {
        this.createSliderLine(this.slider);
        this.setSliderLineWidth(this.length());
        this.createDots(this.length())
    }

}

const slider = new Slider('.slider');
