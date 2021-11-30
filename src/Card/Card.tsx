import { useState } from 'react'
import styles from './Card.module.css'

type CardProps = {
	onClick: () => void
	text: string
}

const Card: React.FC<CardProps> = ({ onClick, text }) => {
	const [isFaceUp, setIsFaceUp] = useState(true)

	const toggleFaceUp = () => {
		setIsFaceUp(!isFaceUp)
	}

	return (
		<>
			{isFaceUp ? (
				<div onClick={toggleFaceUp} className={styles.card}>
					{text}
				</div>
			) : (
				<div
					style={{
						backgroundColor: 'red',
					}}
					onClick={toggleFaceUp}
					className={styles.card}
				></div>
			)}
		</>
	)
}

export default Card
