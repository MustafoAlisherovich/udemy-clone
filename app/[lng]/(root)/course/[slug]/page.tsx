import {
	getDetailedCourse,
	getFeaturedCourse,
	getIsPurchase,
} from '@/actions/course.action'
import { ICourse } from '@/app.types'
import CourseCard from '@/components/cards/course.card'
import TopBar from '@/components/shared/top-bar'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { translation } from '@/i18n/server'
import { auth } from '@clerk/nextjs'
import { Metadata, ResolvingMetadata } from 'next'
import Description from './_components/description'
import Hero from './_components/hero'
import Overview from './_components/overview'

export async function generateMetadata(
	{ params }: { params: { slug: string } },
	parent: ResolvingMetadata
): Promise<Metadata> {
	const course = await getDetailedCourse(params.slug!)

	return {
		title: course.title,
		description: course.description,
		openGraph: {
			images: course.previewImage,
			title: course.title,
			description: course.description,
		},
		keywords: course.tags,
	}
}

interface Props {
	params: {
		lng: string
		slug: string
	}
}

async function Page({ params: { lng, slug } }: Props) {
	const { t } = await translation(lng)
	const { userId } = auth()

	const courseJSON = await getDetailedCourse(slug)
	const coursesJSON = await getFeaturedCourse()

	const course = JSON.parse(JSON.stringify(courseJSON))
	const courses = JSON.parse(JSON.stringify(coursesJSON))
	let isPurchase

	if (userId) {
		isPurchase = await getIsPurchase(userId!, slug)
	}

	return (
		<>
			<TopBar label='allCourses' extra='Full Courses ReactJS' />
			<div className='container mx-auto max-w-6xl'>
				<div className='grid grid-cols-3 gap-4 pt-12'>
					<div className='col-span-2 max-lg:col-span-3'>
						<Hero {...course} />
						<Overview {...course} />
					</div>
					<div className='col-span-1 max-lg:col-span-3'>
						<Description course={course} isPurchase={!!isPurchase} />
					</div>
				</div>

				<Separator className='my-12' />

				<h1 className='font-spaceGrotesk text-4xl font-bold'>
					{t('youMayLike')}
				</h1>

				<Carousel opts={{ align: 'start' }} className='mt-6 w-full'>
					<CarouselContent>
						{courses.map((course: ICourse) => (
							<CarouselItem
								key={course.title}
								className='md:basis-1/2 lg:basis-1/3'
							>
								<CourseCard {...course} />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</>
	)
}

export default Page
