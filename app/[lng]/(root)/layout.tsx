import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/navbar'

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			{children}
		</main>
	)
}

export default Layout
