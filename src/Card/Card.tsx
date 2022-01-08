import { useState } from 'react'
import { Card } from '../game/MemoryGame'
import styles from './Card.module.css'

type CardProps = {
	onClick: () => void
	card: Card<String>
}

const CardView: React.FC<CardProps> = ({ onClick, card }) => {
	// const [isFaceUp, setIsFaceUp] = useState(true)

	// const toggleFaceUp = () => {
	// 	setIsFaceUp(!isFaceUp)
	// }

	const { isFaceUp, content } = card

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
					onClick={onClick}
					className={styles.card}
				></div>
			)}
		</>
	)
}

export default CardView
