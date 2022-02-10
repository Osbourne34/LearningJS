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
        let oneItem;
        let twoItem;
        let disable = false;
        let countGame = 0;

        gameItems.forEach((item, index, arr) => {
            item.addEventListener('click', () => {

                if (item.classList.contains('open')) {
                    return;
                }

                if (item !== oneItem && !disable) {
                    item.classList.add('open');
                    if (!oneItem) {
                        return oneItem = item;
                    }
                    disable = true;
                    twoItem = item;

                    if (oneItem.children[0].innerHTML === twoItem.children[0].innerHTML) {
                        oneItem.classList.add('open');
                        twoItem.classList.add('open');
                        oneItem = twoItem = '';
                        countGame++;
                        if(countGame === this.count / 2) {
                            setTimeout(()=> {
                                let restartGame = confirm('Хотите сыграть ещё раз?');
                                if(restartGame) {
                                    this.init();
                                }
                                return;
                            }, 500)
                        }
                        disable = false;
                    } else {
                        setTimeout(() => {
                            oneItem.classList.remove('open');
                            twoItem.classList.remove('open');
                            oneItem = twoItem = '';
                            disable = false;
                        }, 500)
                    };
                };
            });
        });
    };

    init() {
        this.renderItems(this.random(this.createArray(this.count)));
        this.gameLogic();
    }
}

const game = new Game('.wrapper', 20);
game.init();
