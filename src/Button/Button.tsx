import styles from './Button.module.css'

type ButtonProps = {
	onClick: () => void
	icon: React.ReactElement
}
const Button: React.FC<ButtonProps> = ({ onClick, icon }) => {
	return (
		<button className={styles.btn} onClick={onClick}>
			{icon}
		</button>
	)
}

export default Button
