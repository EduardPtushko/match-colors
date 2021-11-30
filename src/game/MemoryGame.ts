export class Card<CardContent> {
	isFaceUp = false
	isMatched = false
	content: CardContent
	id: number

	constructor(content: CardContent, id: number) {
		this.content = content
		this.id = id
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
	}

	private indexOfTheOneAndOnlyFaceUpCard?: number

	choose(card: Card<CardContent>) {
		const chosenIndex = this.cards.findIndex((idx) => idx.id === card.id)
		if (
			chosenIndex !== -1 &&
			!this.cards[chosenIndex].isFaceUp &&
			!this.cards[chosenIndex].isMatched
		) {
			console.log('chosenindex', chosenIndex)
		}
	}
}
