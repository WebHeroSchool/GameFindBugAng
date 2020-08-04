const level = localStorage.getItem('level');
const TABLE = document.getElementById('table');

let isCardChoose = false;

const levels = new Map();
levels.set('simple', 3);
levels.set('medium', 6);
levels.set('hard', 10);

if (level === 'hard') {
  TABLE.classList.remove('table');
  TABLE.classList.add('table__hard')
}

let createCard = (isBug) => {
  let card = document.createElement('div');
  let inner = document.createElement('div');
  let front = document.createElement('div');
  let back = document.createElement('div');
  let imgFront = document.createElement('img');
  let imgBack = document.createElement('img');
  imgFront.setAttribute('src', "./style/card_cover.png");
  imgBack.setAttribute('src', isBug ? './style/card_bug.png' : './style/card_game_over.png');
  back.append(imgBack);
  front.append(imgFront);
  inner.append(front);
  inner.append(back);
  card.append(inner);
  TABLE.append(card);
  card.classList.add('card');
  imgFront.classList.add('card-img__front');
  imgBack.classList.add('card-img__back');
  inner.classList.add('card-inner');
  front.classList.add('card-inner__front');
  back.classList.add('card-inner__back', 'reverse');
  inner.onmouseover = () => front.classList.add('card__hover');
  inner.onmouseout = () => front.classList.remove('card__hover');
  card.addEventListener('click', () => {
    if (!isCardChoose) {
      inner.classList.add('reverse');
      isCardChoose = true;
    }
  });
  imgBack.addEventListener('click', () => document.location = 'index.html');
};

const cardCount = levels.get(level);
const bagCardIndex = Math.floor(Math.random() * cardCount);

for (let j = 0; j < cardCount; j++) {
  createCard(j === bagCardIndex);
}
