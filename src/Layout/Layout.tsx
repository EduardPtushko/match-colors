import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>
}

export default Layout
