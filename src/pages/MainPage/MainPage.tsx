import { atom, selector, useRecoilValue } from 'recoil'
import { observer } from 'mobx-react-lite'
// import Card from '../../Card'
import styles from './MainPage.module.css'
import { EmojiMemoryGame } from '../../game/EmojiMemoryGame'
import CardView from '../../Card'
import { useState } from 'react'

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

// export const emojiCountState = atom({
// 	key: 'emojiCount',
// 	default: 6,
// })

// const emojiCountSelector = selector({
// 	key: 'emoji',
// 	get: ({ get }) => {
// 		return get(emojiCountState)
// 	},
// 	set: ({ get, set }) => {
// 		const count = get(emojiCountState)
// 		if (count < emojis.length) {
// 			set(emojiCountState, count)
// 		}
// 	},
// })

const MainPage: React.FC = () => {
	const [viewModel] = useState(() => new EmojiMemoryGame())

	const handleClick = (card: any) => {
		viewModel.choose(card)
		console.log(viewModel.cards)
	}

	return (
		<main className={styles.container}>
			{viewModel.cards.map((card) => (
				<CardView
					key={card.id}
					card={card}
					isFaceUp={card.isFaceUp}
					content={card.content}
					onClick={handleClick}
				/>
			))}
		</main>
	)
}

export default observer(MainPage)
