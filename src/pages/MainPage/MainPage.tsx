import { atom, selector, useRecoilValue } from 'recoil'
import Card from '../../Card'
import styles from './MainPage.module.css'
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
	const emojiCount = useRecoilValue(emojiCountState)

	return (
		<main className={styles.container}>
			{emojis.slice(0, emojiCount).map((emoji) => (
				<Card key={emoji} text={emoji} onClick={() => console.log('clicked')} />
			))}
		</main>
	)
}

export default MainPage
