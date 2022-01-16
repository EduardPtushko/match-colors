import React from 'react'
import Button from '../Button'
import IconAdd from './IconAdd'
import IconRemove from './IconRemove'
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<Button onClick={() => {}} icon={<IconRemove />} />
			<Button onClick={() => {}} icon={<IconAdd />} />
		</nav>
	)
}

export default Navbar
