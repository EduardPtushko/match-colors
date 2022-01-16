export class ThemeModel {
	themes: EmojiMemoryTheme[] = [
		new EmojiMemoryTheme(
			'Animals',
			['🐶', '🐯', '🐱', '🐭', '🦊', '🐻', '🐼', '🐷', '🐨', '🐵', '🦁', '🐔'],
			'blue',
			8,
		),
		new EmojiMemoryTheme(
			'Halloween',
			['👻', '🎃', '🧟', '🕷', '🕸', '🦇', '🪓', '🔪', '⛓', '⚰️'],
			'orange',
			6,
		),
		new EmojiMemoryTheme('Suites', ['♠️', '♣️', '♥️', '♦️'], 'gray', 4),
		new EmojiMemoryTheme(
			'Sport',
			['⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🎱', '🏉', '🏓', '🥎', '🥇', '🏆'],
			'red',
			6,
		),
		new EmojiMemoryTheme(
			'Food',
			['🍏', '🍎', '🍊', '🍋', '🍌', '🥑', '🥝', '🍇', '🍐', '🍓', '🍒', '🍉'],
			'blue',
			8,
		),
		new EmojiMemoryTheme(
			'Vehicles',
			[
				'🚕',
				'🚌',
				'🚓',
				'🚑',
				'🚒',
				'🚜',
				'🚚',
				'🚛',
				'🚠',
				'🚋',
				'🚄',
				'✈️',
				'🛳',
				'🚁',
				'🚂',
			],
			'purple',
			5,
		),
		new EmojiMemoryTheme(
			'Faces',
			[
				'😃',
				'😂',
				'😍',
				'🙃',
				'😇',
				'😎',
				'🤓',
				'🤩',
				'🤬',
				'🥶',
				'🤢',
				'🤠',
				'😷',
				'🤕',
				'😱',
				'😜',
				'🥵',
				'🤡',
				'💩',
				'🥳',
			],
			'systemPink',
			7,
		),
	]

	chooseTheme(): EmojiMemoryTheme {}
}

class EmojiMemoryTheme {
	name: string
	emoji: string[]
	color: string
	numberOfPairs: number

	constructor(name: string, emoji: string[], color: string, numberOfPairs: number) {
		this.name = name
		this.color = color
		this.emoji = emoji
		this.numberOfPairs = numberOfPairs
	}
}
