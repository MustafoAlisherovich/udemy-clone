import type { Metadata } from 'next'
import './globals.css'
import { Inter, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const spaceGrotesk = SpaceGrotesk({
	variable: '--font-space-grotesk',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Udemy-clone',
	description: 'Startup Praktikum Next.js Project',
	icons: { icon: '/logo.svg' },
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${inter.variable} ${spaceGrotesk.variable} overflow-x-hidden`}
				suppressHydrationWarning
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
