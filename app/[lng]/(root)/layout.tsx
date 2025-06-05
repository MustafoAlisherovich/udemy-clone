import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
