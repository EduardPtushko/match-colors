import { makeAutoObservable } from 'mobx'
import { shuffle } from '../utils/shuffle'

export class Card<CardContent> {
	isFaceUp = false
	isMatched = false
	content: CardContent
	id: number

	constructor(content: CardContent, id: number) {
		this.content = content
		this.id = id
		makeAutoObservable(this)
	}
}

export class MemoryGame<CardContent> {
	cards: Card<CardContent>[]

	constructor(numberOfPairsOfCards: number, createCardContent: (num: number) => CardContent) {
		this.cards = []

		for (let i = 0; i < numberOfPairsOfCards; i++) {
			const content = createCardContent(i)
			this.cards.push(new Card(content, i * 2))
			this.cards.push(new Card(content, i * 2 + 1))
		}
		shuffle(this.cards)
	}

	private indexOfTheOneAndOnlyFaceUpCard: number | null = null

	choose(card: Card<CardContent>) {
		const chosenIndex = this.cards.findIndex((aCard) => aCard.id === card.id)

		if (
			chosenIndex !== -1 &&
			!this.cards[chosenIndex].isFaceUp &&
			!this.cards[chosenIndex].isMatched
		) {
			if (this.indexOfTheOneAndOnlyFaceUpCard !== null) {
				if (
					this.cards[this.indexOfTheOneAndOnlyFaceUpCard].content ===
					this.cards[chosenIndex].content
				) {
					this.cards[chosenIndex].isMatched = true
					this.cards[this.indexOfTheOneAndOnlyFaceUpCard].isMatched = true
				}

				this.indexOfTheOneAndOnlyFaceUpCard = null
			} else {
				this.cards.forEach((_, index) => {
					this.cards[index].isFaceUp = false
				})
				this.indexOfTheOneAndOnlyFaceUpCard = chosenIndex
			}

			this.cards[chosenIndex].isFaceUp =
				this.cards[chosenIndex].isFaceUp === true ? false : true
		}
	}
}
