import { Player, Card, Deck } from "./logic.js"

const cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
const cards = [
{name:'2', value: 2},
{name:'3', value:3},
{name:'4', value:4},
{name:'5', value:5},
{name:'6', value:6},
{name:'7', value:7},
{name:'8', value:8},
{name:'9', value:9},
{name:'10', value:10},
{name:'J', value: 11},
{name:'D', value: 12},
{name:'K', value: 13},
{name: 'T', value: 14}]

const allCards = []

cardSuits.forEach(suit => {
    cards.forEach(({name, value}) => {
    const card = new Card({name, type: suit, value})

    allCards.push(card) 
    })
})

const deck = new Deck({cards: allCards})
deck.mixCards()
const playersCards = deck.splitCards()

const firstPlayerName = prompt('What is the name of Player 1?')
const secondPlayerName = prompt('What is the name of Player 2?')

const firstPlayer = new Player({name: firstPlayerName, cards: playersCards[0]})
const secondPlayer = new Player({name: secondPlayerName, cards: playersCards[1]})

console.log('The game is starting...')

while (firstPlayer.getPlayerCardsLength() !== 0 || secondPlayer.getPlayerCardsLength() !== 0 ) { 
    const cardOfFirstPlayer = firstPlayer.throwCard()
    const cardOfSecondPlayer = secondPlayer.throwCard()

        console.log('--------------------------')
        console.log(`🃏 Card for ${firstPlayerName} ${cardOfFirstPlayer.name} ${cardOfFirstPlayer.type}`)
        console.log(`🃏 Card for ${secondPlayerName} ${cardOfSecondPlayer.name} ${cardOfSecondPlayer.type}`)

        if (cardOfFirstPlayer.value > cardOfSecondPlayer.value) {
            firstPlayer.increasePointsByOne()
            console.log(`🎉🎉🎉${firstPlayerName} won and recieved one point!🎉🎉🎉`)
        }

        if (cardOfFirstPlayer.value < cardOfSecondPlayer.value) {
            secondPlayer.increasePointsByOne()
            console.log(`🎉🎉🎉${secondPlayerName} won and recieved one point!🎉🎉🎉`)
        }

        if (cardOfFirstPlayer.value === cardOfSecondPlayer.value) {
            console.log("Cards are the same. 0 points for both players.")

            continue;
        }
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(`${firstPlayerName} has ${firstPlayer.getAmountOfPoints()} points`)
console.log(`${secondPlayerName} has ${secondPlayer.getAmountOfPoints()} points`)
if (firstPlayer.getAmountOfPoints() > secondPlayer.getAmountOfPoints()) {
    console.log(`${firstPlayerName} is winner!🏆`)
} else if (firstPlayer.getAmountOfPoints() < secondPlayer.getAmountOfPoints()) {
    console.log(`${secondPlayerName} is winner!🏆`)
} else {
    console.log("There is no winners!🏳️");
}


