const desk = document.getElementById('desk')
const dispatch = document.getElementById('dispatch')
const reset = document.getElementById('reset')
const point = document.getElementById('point')
const massage = document.getElementById('massage')
let cards = []

function createCard(suit, point) {
  const displayPoints = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ]

  return {
    suit: suit,
    point: point,
    display: Poker.getCardImage(100, suit, displayPoints[point - 1]),
  }
}
//洗牌演算法
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

function initCards() {
  const tempCards = []
  const suits = ['h', 'd', 's', 'c']
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < points.length; j++) {
      tempCards.push(createCard(suits[i], points[j]))
    }
  }

  cards = shuffle(tempCards)
}

let card = initCards()
let cardIndex = 0
let totlePoint = 0

dispatch.addEventListener('click', function () {
  if (totlePoint < 10.5) {
    desk.appendChild(cards[cardIndex].display)

    let pointTamp = cards[cardIndex].point
    if (pointTamp > 10) pointTamp = 0.5

    totlePoint += pointTamp
  }

  if (totlePoint > 10.5) {
    massage.innerHTML = '爆掉了！！！'
  }

  point.innerHTML = `點數總和${totlePoint}點`

  cardIndex++
})

reset.addEventListener('click', function () {
  card = initCards()
  cardIndex = 0
  totlePoint = 0
  desk.innerHTML = ''
  point.innerHTML = ''
  point.innerHTML = ''
})

// console.log('cards', cards)
