'use client'

import { clearNotifications } from '@/actions/notificiation.action'
import FillLoading from '@/components/shared/fill-loading'
import { Button } from '@/components/ui/button'
import useTranslate from '@/hooks/use-translate'
import { useAuth } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

function ClearButton() {
	const pathname = usePathname()
	const { userId } = useAuth()
	const t = useTranslate()
	const [loading, setLoading] = useState(false)

	const onHandler = () => {
		setLoading(true)
		const promise = clearNotifications(userId!, pathname)

		toast.promise(promise, {
			loading: t('loading'),
			success: t('successfully'),
			error: t('error'),
		})
	}

	return (
		<Button
			className='relative mx-auto block font-spaceGrotesk font-semibold'
			size={'lg'}
			rounded={'full'}
			onClick={onHandler}
			disabled={loading}
		>
			{loading && <FillLoading />}
			ClearButton
		</Button>
	)
}

export default ClearButton
