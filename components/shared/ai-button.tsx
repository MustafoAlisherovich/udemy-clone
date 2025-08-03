import { Bot } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

function AiButton() {
	return (
		<Button
			className='fixed bottom-5 right-5 size-12 text-white'
			rounded={'full'}
			size={'icon'}
			asChild
		>
			<Link href={'/ai'}>
				<Bot />
			</Link>
		</Button>
	)
}

export default AiButton
