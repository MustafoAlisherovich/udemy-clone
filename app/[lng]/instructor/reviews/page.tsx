import { getReviews } from '@/actions/review.action'
import { IReview, SearchParamsProps } from '@/app.types'
import InstructorReviewCard from '@/components/cards/instructor-review.card'
import Header from '@/components/shared/header'
import Pagination from '@/components/shared/pagination'
import { Separator } from '@/components/ui/separator'
import { auth } from '@clerk/nextjs'

async function Page({ searchParams }: SearchParamsProps) {
	const { userId } = auth()

	const page = searchParams.page ? +searchParams.page : 1

	const result = await getReviews({ clerkId: userId!, page, pageSize: 6 })

	return (
		<>
			<Header
				title='Reviews'
				description='Here you can see all the reviews of your courses'
			/>

			<div className='mt-4 rounded-md bg-background p-4'>
				<h3 className='font-spaceGrotesk text-lg font-medium'>All Reviews</h3>
				<Separator className='my-3' />

				<div className='flex flex-col space-y-3'>
					{result.reviews.map((review: IReview) => (
						<InstructorReviewCard
							key={review._id}
							review={JSON.parse(JSON.stringify(review))}
						/>
					))}

					<div className='mt-6'>
						<Pagination isNext={result.isNext} pageNumber={page} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
