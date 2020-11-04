const desk = document.getElementById('desk')

function createCard(suit, point) {
  return {
    suit: suit,
    point: point,

    display: function () {
      let displayPoint = point + ''

      if (this.point === 1) displayPoint = 'A'
      if (this.point === 11) displayPoint = 'J'
      if (this.point === 12) displayPoint = 'Q'
      if (this.point === 13) displayPoint = 'K'

      console.log(suit, displayPoint)

      return Poker.getCardImage(100, this.suit, displayPoint)
    },

    // display: function () {
    //   switch (this.point) {
    //     case 1:
    //       displayPoint = 'A'
    //       break
    //     case 11:
    //       displayPoint = 'J'
    //       break
    //     case 12:
    //       displayPoint = 'Q'
    //       break
    //     case 13:
    //       displayPoint = 'K'
    //       break
    //     default:
    //       displayPoint = this.point
    //       break
    //   }
    //   return Poker.getCardImage(100, this.suit, displayPoint)
    // },
  }
}

const card = createCard('s', 1)
desk.appendChild(card.display())
