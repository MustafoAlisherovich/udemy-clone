'use client'

import { ICourse } from '@/app.types'
import { Button } from '@/components/ui/button'
import useTranslate from '@/hooks/use-translate'
import {
	BarChart2,
	Clock,
	Infinity,
	Languages,
	MonitorPlay,
} from 'lucide-react'
import { GrCertificate } from 'react-icons/gr'
import { BiCategory } from 'react-icons/bi'

function Description(course: ICourse) {
	const t = useTranslate()

	return (
		<div className='rounded-md border bg-secondary/50 p-4 shadow-lg dark:shadow-white/20 lg:sticky lg:top-24 lg:p-6'>
			<div className='flex items-center justify-between font-spaceGrotesk'>
				<div className='text-2xl font-bold'>
					{course.oldPrice.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</div>
				<div className='font-bold line-through'>
					{' '}
					{course.currentPrice.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</div>
			</div>

			<Button size={'lg'} className='mt-4 w-full font-bold'>
				{t('addToCart')}
			</Button>
			<Button size={'lg'} className='mt-2 w-full font-bold' variant={'outline'}>
				{t('buyNow')}
			</Button>

			<p className='my-3 text-center text-sm text-muted-foreground'>
				{t('guarantee')}
			</p>

			<div className='mt-4 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-spaceGrotesk'>
					<MonitorPlay className='size-5' />
					<span className='font-bold'>{t('lessons')}</span>
				</div>
				<p className='text-muted-foreground'>{course.totalLessons}</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-spaceGrotesk'>
					<Clock className='size-5' />
					<span className='font-bold'>{t('durations')}</span>
				</div>
				<p className='text-muted-foreground'>
					{course.totalDuration} {t('hours')}
				</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-spaceGrotesk'>
					<BarChart2 className='size-5' />
					<span className='font-bold'>{t('skillLevel')}</span>
				</div>
				<p className='text-muted-foreground'>{course.level}</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-spaceGrotesk'>
					<Languages className='size-5' />
					<span className='font-bold'>{t('language')}</span>
				</div>
				<p className='text-muted-foreground'>{course.language}</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-spaceGrotesk'>
					<BiCategory className='size-5' />
					<span className='font-bold'>{t('Category')}</span>
				</div>
				<p className='capitalize text-muted-foreground'>{course.category}</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-spaceGrotesk'>
					<GrCertificate className='size-5' />
					<span className='font-bold'>{t('certificate')}</span>
				</div>
				<p className='text-muted-foreground'>{t('yes')}</p>
			</div>

			<div className='mt-2 flex items-center justify-between border-b pb-2'>
				<div className='flex items-center gap-2 font-spaceGrotesk'>
					<Infinity className='size-5' />
					<span className='font-bold'>{t('fullLifetime')}</span>
				</div>
				<p className='text-muted-foreground'>{t('yes')}</p>
			</div>
		</div>
	)
}

export default Description
