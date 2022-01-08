import { atom, selector, useRecoilValue } from 'recoil'
// import Card from '../../Card'
import styles from './MainPage.module.css'
import { EmojiMemoryGame } from '../../game/EmojiMemoryGame'
import CardView from '../../Card'
const emojis = [
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

export const emojisLength = emojis.length

export const emojiCountState = atom({
	key: 'emojiCount',
	default: 6,
})

const emojiCountSelector = selector({
	key: 'emoji',
	get: ({ get }) => {
		return get(emojiCountState)
	},
	set: ({ get, set }) => {
		const count = get(emojiCountState)
		if (count < emojis.length) {
			set(emojiCountState, count)
		}
	},
})

const MainPage: React.FC = () => {
	const viewModel = new EmojiMemoryGame()
	console.log(viewModel.cards)
	const emojiCount = useRecoilValue(emojiCountState)

	return (
		<main className={styles.container}>
			{viewModel.cards.map((card) => (
				<CardView key={card.id} card={card} onClick={() => viewModel.choose(card)} />
			))}
		</main>
	)
}

export default MainPage
