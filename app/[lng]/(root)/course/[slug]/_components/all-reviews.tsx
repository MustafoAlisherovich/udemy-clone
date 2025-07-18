'use client'

import { getCourseReviews, getReviewPercentage } from '@/actions/review.action'
import { ICourse, IReview } from '@/app.types'
import ReviewCard from '@/components/cards/review.card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import useTranslate from '@/hooks/use-translate'
import { Dot, Loader2, Star } from 'lucide-react'
import { useState } from 'react'
import ReactStars from 'react-stars'

function AllReviews(course: ICourse) {
	const t = useTranslate()
	const [reviews, setReviews] = useState<IReview[]>([])
	const [open, setOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [count, setCount] = useState(3)
	const [percentages, setPercentages] = useState<{ [key: string]: number }>()

	const onOpenReview = async () => {
		if (reviews.length) return setOpen(true)
		setIsLoading(true)
		try {
			const [reviews, percentages] = await Promise.all([
				getCourseReviews(course._id, count),
				getReviewPercentage(course._id),
			])
			setReviews(reviews)
			setPercentages(percentages)
			setIsLoading(false)
			setOpen(true)
		} catch (error) {
			setIsLoading(false)
		}
	}

	const onLoadMore = async () => {
		setCount(prev => prev + 3)
		const newCount = count + 3
		setIsLoading(true)
		try {
			const reviews = await getCourseReviews(course._id, newCount)
			setReviews(reviews)
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
		}
	}

	return (
		<>
			<Button
				size={'lg'}
				rounded={'full'}
				className='mx-auto mt-6 flex justify-center'
				onClick={onOpenReview}
				disabled={isLoading}
			>
				{isLoading ? <Loader2 className='animate-spin' /> : t('viewAll')}
			</Button>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className='custom-scrollbar max-h-full max-w-full overflow-y-auto md:max-w-4xl'>
					<div className='mt-2 flex items-center gap-1'>
						<Star className='fill-[#DD6B20] text-[#DD6B20]' />
						<div className='text-xl font-medium'>
							{t('reviewCourse')}: {course.rating.toString().slice(0, 3)}
						</div>
						<Dot />
						<div className='text-xl font-medium'>
							{course.reviewCount} {t('review')}
						</div>
					</div>

					<div className='flex flex-col gap-5 md:flex-row'>
						<div className='w-full md:w-[30%]'>
							{percentages &&
								[5, 4, 3, 2, 1].map(idx => (
									<div key={idx} className='flex items-center gap-2'>
										<div className='relative h-3 w-3/5 bg-gray-100 dark:bg-gray-900 md:w-2/5'>
											<div
												className='absolute inset-0 bg-gray-900 dark:bg-gray-100'
												style={{ width: `${percentages[idx]}%` }}
											/>
										</div>
										<ReactStars edit={false} value={idx} />
										<div>{percentages[idx]}%</div>
									</div>
								))}
						</div>
						<div className='w-full md:w-[70%]'>
							{reviews.map(review => (
								<ReviewCard key={review._id} review={review} />
							))}

							{course.reviewCount > count && (
								<Button
									size={'lg'}
									rounded={'full'}
									className='mx-auto mt-6 flex justify-center'
									onClick={onLoadMore}
									disabled={isLoading}
								>
									{isLoading ? (
										<Loader2 className='animate-spin' />
									) : (
										t('loadMore')
									)}
								</Button>
							)}
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default AllReviews
