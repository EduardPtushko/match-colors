import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Card } from '../game/MemoryGame'
import styles from './Card.module.css'
import { isObservable } from 'mobx'

type CardProps = {
	onClick: (card: any) => void
	card: Card<String>
	isFaceUp: boolean
	content: string
}

const CardView: React.FC<CardProps> = observer(({ onClick, card, isFaceUp, content }) => {
	// const [isFaceUp, setIsFaceUp] = useState(true)

	// const toggleFaceUp = () => {
	// 	setIsFaceUp(!isFaceUp)
	// }

	// const { isFaceUp, content } = card

	return (
		<>
			{isFaceUp ? (
				<div onClick={onClick} className={styles.card}>
					{content}
				</div>
			) : (
				<div
					style={{
						backgroundColor: 'red',
					}}
					onClick={() => onClick(card)}
					className={styles.card}
				></div>
			)}
		</>
	)
})

export default CardView
