'use client'

import { getCount } from '@/actions/notificiation.action'
import { useAuth } from '@clerk/nextjs'
import { Bell } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

function Notification() {
	const [count, setCount] = useState(0)

	const { userId } = useAuth()

	useEffect(() => {
		const fetchCount = async () => {
			try {
				const data = await getCount(userId!)
				setCount(data)
			} catch (error) {
				setCount(0)
			}
		}

		if (userId) {
			fetchCount()
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Button
			size={'icon'}
			variant={count === 0 ? 'ghost' : 'secondary'}
			asChild
			className='relative'
			aria-label='notifications'
		>
			<Link href={'/profile/notifications'} aria-label='notifications'>
				<Bell />
				{count > 0 && (
					<div className='absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-destructive'>
						{count}
					</div>
				)}
			</Link>
		</Button>
	)
}

export default Notification
