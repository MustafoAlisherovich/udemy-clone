import TopBar from '@/components/shared/top-bar'
import Hero from './_components/hero'
import Overview from './_components/overview'
import Description from './_components/description'
import { Separator } from '@/components/ui/separator'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import CourseCard from '@/components/cards/course.card'
import { translation } from '@/i18n/server'
import { getDetailedCourse, getFeaturedCourse } from '@/actions/course.action'
import { ICourse } from '@/app.types'

interface Props {
	params: {
		lng: string
		slug: string
	}
}

async function Page({ params: { lng, slug } }: Props) {
	const { t } = await translation(lng)

	const courseJSON = await getDetailedCourse(slug)
	const coursesJSON = await getFeaturedCourse()

	const course = JSON.parse(JSON.stringify(courseJSON))
	const courses = JSON.parse(JSON.stringify(coursesJSON))

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
						<Description {...course} />
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
