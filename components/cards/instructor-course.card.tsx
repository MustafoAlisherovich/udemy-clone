import { ICourse } from '@/app.types'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'

interface Props {
	course: ICourse
}

function InstructorCourseCard({ course }: Props) {
	return (
		<Link href={`/en/instructor/my-courses/${course._id}`}>
			<div className='flex flex-col space-y-2 rounded-md bg-background p-2'>
				<div className='relative h-40 w-full'>
					<Image
						src={course.previewImage}
						alt={course.title}
						fill
						className='rounded-md object-cover'
					/>
				</div>
				<div className='flex items-center justify-between px-2'>
					<h1 className='font-spaceGrotesk text-2xl font-bold'>
						{course.title}
					</h1>
					<Badge variant={course.published ? 'default' : 'destructive'}>
						{course.published ? 'Published' : 'Draft'}
					</Badge>
				</div>
			</div>
		</Link>
	)
}

export default InstructorCourseCard
