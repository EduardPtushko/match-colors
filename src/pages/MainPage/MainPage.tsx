import { observer } from 'mobx-react-lite'
import styles from './MainPage.module.css'
import { EmojiMemoryGame } from '../../game/EmojiMemoryGame'
import CardView from '../../Card'
import { useState } from 'react'

const MainPage: React.FC = () => {
	const [viewModel] = useState(() => new EmojiMemoryGame())

	const handleClick = (card: any) => {
		viewModel.choose(card)
	}

	return (
		<main className={styles.container}>
			{viewModel.cards.map((card) => (
				<CardView key={card.id} card={card} onClick={handleClick} />
			))}
		</main>
	)
}

export default observer(MainPage)
