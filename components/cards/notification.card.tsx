'use client'

import { deleteNotifications } from '@/actions/notificiation.action'
import { INotification } from '@/app.types'
import useTranslate from '@/hooks/use-translate'
import { getTimeLocale } from '@/lib/utils'
import { format } from 'date-fns'
import { Trash2 } from 'lucide-react'
import { useParams, usePathname } from 'next/navigation'
import { IoIosNotifications } from 'react-icons/io'
import { toast } from 'sonner'
import { Button } from '../ui/button'

interface Props {
	item: INotification
}

function NotificationCard({ item }: Props) {
	const { lng } = useParams()
	const pathname = usePathname()
	const t = useTranslate()

	const handleDelete = () => {
		const promise = deleteNotifications(item._id, pathname)

		toast.promise(promise, {
			loading: t('loading'),
			success: t('successfully'),
			error: t('error'),
		})
	}

	return (
		<div className='group flex items-center justify-between border-t bg-primary/5 p-2'>
			<div>
				<div className='flex items-center font-spaceGrotesk font-semibold'>
					<IoIosNotifications />
					<div className='flex gap-1'>
						{item.message.split(' ').map(c => (
							<span key={c}>{t(c)}</span>
						))}
					</div>
				</div>
				<p className='text-sm text-gray-400'>
					{format(new Date(item.createdAt), 'MMMM dd, yyyy', {
						locale: getTimeLocale(`${lng}`),
					})}
				</p>
			</div>
			<Button
				size={'icon'}
				variant={'destructive'}
				className='size-8 opacity-0 transition-all group-hover:opacity-100'
				onClick={handleDelete}
			>
				<Trash2 className='size-4' />
			</Button>
		</div>
	)
}

export default NotificationCard
