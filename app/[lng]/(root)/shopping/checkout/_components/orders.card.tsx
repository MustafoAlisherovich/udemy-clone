import { ICourse } from '@/app.types'
import Image from 'next/image'

function OrdersCard(item: ICourse) {
	return (
		<div className='flex items-center justify-between border-b pb-2'>
			<div className='flex items-center gap-2'>
				<div className='relative size-12 rounded-md bg-gray-300'>
					<Image
						src={item.previewImage}
						alt={item.title}
						fill
						className='object-cover'
					/>
				</div>
				<h1 className='font-spaceGrotesk font-bold'>{item.title}</h1>
			</div>

			<div className='flex items-center gap-2'>
				<h1 className='font-spaceGrotesk text-sm font-bold'>
					{item.currentPrice.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</h1>
			</div>
		</div>
	)
}

export default OrdersCard
