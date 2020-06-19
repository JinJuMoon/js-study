import { winningLottoTemplate, randomLottoTemplate } from './template.js'

function Lotto() {
    const winningLotto = {};

    const getWinningLotto = () => {
        const round = document.querySelector("#input-lotto-round").value;
        fetch(`http://localhost:8000/lotto/${round}`)
            .then(data => data.json())
            .then(data => {
                winningLotto.winningNumbers = data.winningNumbers.sort((a, b) => a - b);
                winningLotto.bonus = data.bonus;

                const $lottoResult = document.querySelector("#lotto-result");
                $lottoResult.innerHTML = winningLottoTemplate(winningLotto);
            })
    }

    const getRandomLottos = () => {
        const lottoCount = document.querySelector("#input-cash-amount").value / 1000;
        const $lottoQuantity = document.querySelector("#lotto-quantity");
        const $lottos = document.querySelector("#lottos");

        $lottoQuantity.innerHTML = lottoCount;

        const randomNumbers = getRandomNumbers();

        for (let i = 0; i < lottoCount; i++) {
            const htmlToInsert = randomLottoTemplate(randomNumbers);
            if (i === 0) {
                $lottos.innerHTML = htmlToInsert;
            } else {
                $lottos.insertAdjacentHTML('beforeend', htmlToInsert);
            }
        }

        function getRandomNumbers() {
            const numbers = [];
            for (; numbers.length < 6;) {
                const randomNumber = getRandomNumber();
                if (!numbers.includes(randomNumber)) {
                    numbers.push(randomNumber);
                }
            }
            numbers.sort((a, b) => a - b);
            return numbers;
        }

        function getRandomNumber() {
            return Math.floor(Math.random() * (45 - 1 + 1)) + 1;
        }
    }

    const onSubmit = async event => {
        event.preventDefault();
        await getWinningLotto();
        await getRandomLottos();
    }

    this.init = () => {
        const $buyButton = document.querySelector("#buy-button");
        $buyButton.addEventListener("click", onSubmit);
    }
}

const lotto = new Lotto();
lotto.init();