export class Player {
    constructor({name, points = 0, cards = []}) {
        this.name = name;
        this.points = points;
        this.cards = cards;
    }

    throwCard() {
        return this.cards.pop()
    }

    getPlayerCardsLength() {
        return this.cards.length
    }

    increasePointsByOne() {
        this.points += 1 
    }

    getAmountOfPoints() {
        return this.points
    }
}

export class Card {
    constructor({name, type, value}) {
       this.name = name;
       this.type = type;
       this.value = value;
    }
}

export class Deck {
    constructor({cards}) {
        this.cards = cards;
    }

    mixCards() {
        for (let i = 140; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            const cardToMove = this.cards.splice(0, 1)[0]
            
            this.cards.splice(j, 0, cardToMove)
    }}

    splitCards() {
        return this.cards.reduce((acc, card) => {
             if (acc[0].length < 26) {
                acc[0].push(card)
                return acc
             }

             acc[1].push(card)
             return acc
        }, [[], []])
    }


}
