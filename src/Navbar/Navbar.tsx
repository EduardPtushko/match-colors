import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import Button from '../Button'
import { emojiCountState, emojisLength } from '../pages/MainPage/MainPage'
import IconAdd from './IconAdd'
import IconRemove from './IconRemove'
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
	const setEmojiCount = useSetRecoilState(emojiCountState)

	return (
		<nav className={styles.navbar}>
			<Button
				onClick={() => {
					setEmojiCount((prevCount) => {
						if (prevCount > 0) return prevCount - 1
						return prevCount
					})
				}}
				icon={<IconRemove />}
			/>
			<Button
				onClick={() => {
					setEmojiCount((prevCount) => {
						if (prevCount < emojisLength) return prevCount + 1
						return prevCount
					})
				}}
				icon={<IconAdd />}
			/>
		</nav>
	)
}

export default Navbar
