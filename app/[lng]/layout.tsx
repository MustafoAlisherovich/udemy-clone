import { ThemeProvider } from '@/components/providers/theme-provider'
import AiButton from '@/components/shared/ai-button'
import { Toaster } from '@/components/ui/sonner'
import { languages } from '@/i18n/settings'
import { localization } from '@/lib/utils'
import { ChildProps } from '@/types'
import { ClerkProvider } from '@clerk/nextjs'
import { GoogleAnalytics } from '@next/third-parties/google'
import { dir } from 'i18next'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

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

export async function generateStaticParams() {
	return languages.map(lng => ({ lng }))
}

export const metadata: Metadata = {
	metadataBase: new URL('https://udemy-clone-theta-red.vercel.app'),
	title: 'Udemy-clone | Dasturlash kurslari',
	description:
		"Udemy-clone Next.js dasturlash kurslari, amaliyotlar, startup loyihalar va asosiysi sifatli ta'limdir.",
	icons: { icon: '/logo.svg' },
	authors: [
		{
			name: 'Mustafo Alisherovich',
			url: 'https://udemy-clone-theta-red.vercel.app',
		},
	],
	openGraph: {
		title: 'Udemy-clone | Dasturlash kurslari',
		description:
			"Udemy-clone praktikum Next.js dasturlash kurslari, amaliyotlar, startup loyihalar va asosiysi sifatli ta'limdir.",
		type: 'website',
		url: 'https://udemy-clone-theta-red.vercel.app',
		locale: 'uz-UZ',
		images: '/assets/metadata.png',
		countryName: 'Uzbekistan',
		siteName: 'Udemy-clone',
		emails: 'mustafoalisherovic@gmail.com',
	},
	keywords:
		"Praktikum, Udemy, Udemy-clone, online-school, programming language, full course, Startup, blog, Mustafo Alisherovich, dasturlash, dasturlash darslari, o'zbekcha kurslar, dasturlash 0dan, Mustafo dasturlash kurslari, Udemy loyihasi, Alisherovich Startup, Praktikum test, javascript darslari, kurslar haqida blog",
}

interface Props extends ChildProps {
	params: { lng: string }
}

function RootLayout({ children, params: { lng } }: Props) {
	const local = localization(lng)
	return (
		<ClerkProvider localization={local}>
			<html lang={lng} dir={dir(lng)} suppressHydrationWarning>
				<body
					className={`${inter.variable} ${spaceGrotesk.variable} custom-scrollbar overflow-x-hidden`}
					suppressHydrationWarning
				>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<NextTopLoader
							color='#702bb0'
							initialPosition={0.5}
							crawlSpeed={200}
							height={2}
							crawl={true}
							showSpinner={false}
							easing='ease'
							speed={200}
							shadow='0 0 10px #702bb0,0 0 5px #702bb0'
						/>
						<Toaster position='top-center' />
						{children}
						<AiButton />
					</ThemeProvider>
				</body>
				<GoogleAnalytics gaId='G-QHBQTYFTW6' />
			</html>
		</ClerkProvider>
	)
}

export default RootLayout
