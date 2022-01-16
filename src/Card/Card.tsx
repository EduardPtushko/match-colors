import { observer } from 'mobx-react-lite'
import { useLayoutEffect, useRef, useState } from 'react'
import { Card } from '../game/MemoryGame'
import styles from './Card.module.css'

type CardProps = {
	onClick: (card: any) => void
	card: Card<String>
}

const CardView: React.FC<CardProps> = observer(({ onClick, card }) => {
	const targetRef = useRef<HTMLDivElement | null>(null)
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

	const { isFaceUp, isMatched, content } = card

	useLayoutEffect(() => {
		if (targetRef.current) {
			setDimensions({
				width: targetRef.current.offsetWidth,
				height: targetRef.current.offsetHeight,
			})
		}
	}, [])

	const font = (size: { width: number; height: number }) => {
		return Math.min(size.width, size.height) * 0.8
	}

	return (
		<div
			ref={targetRef}
			style={{
				backgroundColor: isFaceUp ? undefined : 'red',
				opacity: isMatched && !isFaceUp ? 0 : 1,
				fontSize: font(dimensions),
			}}
			onClick={() => onClick(card)}
			className={styles.card}
		>
			{isFaceUp ? content : null}
		</div>
	)
})

export default CardView
