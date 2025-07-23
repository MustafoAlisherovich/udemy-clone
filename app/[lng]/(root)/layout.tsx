import RefreshModal from '@/components/modals/refresh-modal'
import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			{children}
			<Footer />
			<RefreshModal />
		</main>
	)
}

export default Layout
