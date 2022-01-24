class Game {

    constructor(wrapper, count) {
        this.wrapper = document.querySelector(wrapper);
        this.count = count;
    }

    createArray(count) {
        let array = [];

        for (let i = 0; i < 2; i++) {
            for (let k = 1; k <= count / 2; k++) {
                array.push({ id: k });
            }
        }

        return array;
    }

    random(array) {
        let randomArray = array.sort(() => {
            return Math.random() - 0.5
        });

        return randomArray;
    }

    renderItems(array) {

        let html = array.map(item => {
            return `
                <div class="game-item">
                    <div class="front">${item.id}</div>
                    <div class="back">?</div>
                </div> 
            `
        }).join('');

        this.wrapper.innerHTML = html;

    }


    gameLogic() {
        const gameItems = document.querySelectorAll('.game-item');
        let count = 0;
        let oneItem;
        let twoItem;
        
        gameItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                count++;
                if(count === 1) {
                    oneItem = item;
                    oneItem.classList.add('open');
                    oneItem = oneItem.children[0].innerHTML;
                } else if (count === 2) {
                    twoItem = item;
                    twoItem.classList.add('open');
                    twoItem = twoItem.children[0].innerHTML;
                    setTimeout(()=> count = 0, 1500)
                }
                if (oneItem !== twoItem) {
                    setTimeout( () => {
                        item.classList.remove('open')
                    }, 1500 )
                }
            });
        });
    }

    

    init() {
        this.renderItems(this.random(this.createArray(this.count)));
        this.gameLogic();
    }
}

const game = new Game('.wrapper', 20);
game.init();
