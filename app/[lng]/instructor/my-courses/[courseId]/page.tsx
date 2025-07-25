import { getCourseById } from '@/actions/course.action'
import { getSections } from '@/actions/section.action'
import Header from '@/components/shared/header'
import { Separator } from '@/components/ui/separator'
import { Images, LayoutPanelLeft, Settings } from 'lucide-react'
import Actions from './_components/actions'
import CourseFields from './_components/course-fields'
import Description from './_components/description'
import Information from './_components/information'
import PreviewImage from './_components/preview-image'
import Price from './_components/price'
import Sections from './_components/sections'
import SelectFields from './_components/select-fields'

async function Page({ params }: { params: { courseId: string } }) {
	const courseJSON = await getCourseById(params.courseId)
	const sectionJSON = await getSections(params.courseId)

	const course = JSON.parse(JSON.stringify(courseJSON))
	const section = JSON.parse(JSON.stringify(sectionJSON))

	return (
		<>
			<div className='flex items-center justify-between'>
				<Header
					title={course.title}
					description='Manage your course and see how it is performing.'
				/>
				<Actions {...course} />
			</div>
			<Separator className='my-3 bg-muted-foreground' />

			<div className='mt-6 grid grid-cols-2 gap-4'>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						<span className='font-spaceGrotesk text-3xl font-medium'>
							Course Fields
						</span>{' '}
						<Settings />
					</div>
					<CourseFields {...course} />
					<Description {...course} />
					<Information {...course} />
					<SelectFields {...course} />
					<Price {...course} />
				</div>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						{/* Sections */}
						<span className='font-spaceGrotesk text-3xl font-medium'>
							Course Sections
						</span>{' '}
						<LayoutPanelLeft />
					</div>
					<Sections course={course} sections={section} />

					{/* Image */}
					<div className='flex items-center gap-2'>
						<span className='font-spaceGrotesk text-3xl font-medium'>
							Preview Image
						</span>
						{''}
						<Images />
					</div>
					<PreviewImage {...course} />
				</div>
			</div>
		</>
	)
}

export default Page
