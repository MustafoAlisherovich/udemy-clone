'use client'

import { ICourse } from '@/app.types'
import CourseCard from '@/components/cards/course.card'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { filterCourses } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { cn, formUrlQuery } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
	courses: ICourse[]
}

function FeaturedCourses({ courses }: Props) {
	const t = useTranslate()
	const searchParams = useSearchParams()
	const router = useRouter()

	const onUpdateParams = (value: string) => {
		const newUrl = formUrlQuery({
			value,
			key: 'filter',
			params: searchParams.toString(),
			toCourses: true,
		})

		router.push(newUrl)
	}

	return (
		<div className='container mx-auto max-w-6xl py-12'>
			<div className='flex items-center justify-between max-md:flex-col max-md:items-start'>
				<div className='flex flex-col space-y-1'>
					<h1 className='font-spaceGrotesk text-3xl font-bold'>
						{t('exploreCourses')}
					</h1>
					<p className='text-sm text-muted-foreground'>
						{t('exploreCoursesDescription')}
					</p>
				</div>

				<div className='flex items-center gap-1 self-end max-md:mt-4 max-md:w-full max-md:rounded-full max-md:bg-primary max-md:p-2'>
					{filterCourses.map(item => (
						<Button
							key={item.name}
							rounded={'full'}
							variant={item.name === 'all' ? 'secondary' : 'ghost'}
							className={cn('font-medium max-md:w-full max-md:bg-secondary')}
							onClick={() => onUpdateParams(item.name)}
						>
							{t(item.label)}
						</Button>
					))}
				</div>
			</div>

			<div className='mt-4 flex flex-col space-y-4 md:hidden'>
				{courses.map(course => (
					<CourseCard key={course.title} {...course} />
				))}
			</div>

			<Carousel
				opts={{ align: 'start' }}
				className='mt-6 hidden w-full md:flex'
			>
				<CarouselContent>
					{courses.map(course => (
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
	)
}

export default FeaturedCourses
