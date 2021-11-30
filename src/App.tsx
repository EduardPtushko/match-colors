import React from 'react'
import Layout from './Layout'
import Navbar from './Navbar'
import AppRoutes from './routes'

const App: React.FC = () => {
	return (
		<Layout>
			<Navbar />
			<AppRoutes />
		</Layout>
	)
}

export default App
