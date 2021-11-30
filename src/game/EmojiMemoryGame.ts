import { Card, MemoryGame } from './MemoryGame'

export class EmojiMemoryGame {
	static emojis = [
		'🛫',
		'🚗',
		'🛵',
		'🚂',
		'🚕',
		'🚙',
		'🚎',
		'🏎',
		'🚓',
		'🚒',
		'🛴',
		'🏍',
		'🚞',
		'🚄',
		'🚛',
		'🚀',
		'✈️',
		'⛴',
		'🛰',
		'🚔',
	]

	static createMemoryGame(): MemoryGame<string> {
		const memoryGame = new MemoryGame<string>(
			4,
			(index: number) => EmojiMemoryGame.emojis[index],
		)
		return memoryGame
	}

	private model: MemoryGame<string> = EmojiMemoryGame.createMemoryGame()

	cards: Card<string>[] = this.model.cards

	choose(card: Card<string>) {
		this.model.choose(card)
	}
}
