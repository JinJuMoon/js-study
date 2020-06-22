export const winningLottoTemplate = winningNumber =>
    `<div class="lotto-number winning">${winningNumber}</div>`

export const winningBonusTemplate = bonus =>
    `<div class="lotto-number winning bonus-number">${bonus}</div>`

export const randomLottoTemplate = randomNumbers => {
    console.log(randomNumbers);
    const numbers = randomNumbers.map(number => randomNumberTemplate(number)).join("");
    return `<div class="lotto">
        ${numbers}
    </div>`
}

const randomNumberTemplate = number =>
    `<div class="lotto-number">${number}</div>`