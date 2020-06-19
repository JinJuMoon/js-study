export const winningLottoTemplate = winningLotto =>
    `<div class="lotto">
      <div class="lotto-number winning">${winningLotto.winningNumbers[0]}</div>
      <div class="lotto-number winning">${winningLotto.winningNumbers[1]}</div>
      <div class="lotto-number winning">${winningLotto.winningNumbers[2]}</div>
      <div class="lotto-number winning">${winningLotto.winningNumbers[3]}</div>
      <div class="lotto-number winning">${winningLotto.winningNumbers[4]}</div>
      <div class="lotto-number winning">${winningLotto.winningNumbers[5]}</div>
      <div class="lotto-number winning bonus-number">${winningLotto.bonus}</div>
    </div>`

export const randomLottoTemplate = lottoNumbers =>
    `<div class="lotto">
      <div class="lotto-number">${lottoNumbers[0]}</div>
      <div class="lotto-number">${lottoNumbers[1]}</div>
      <div class="lotto-number">${lottoNumbers[2]}</div>
      <div class="lotto-number">${lottoNumbers[3]}</div>
      <div class="lotto-number">${lottoNumbers[4]}</div>
      <div class="lotto-number">${lottoNumbers[5]}</div>
    </div>`