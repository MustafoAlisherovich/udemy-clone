'use client'

import { updateCourse } from '@/actions/course.action'
import { sendNotification } from '@/actions/notificiation.action'
import { ICourse } from '@/app.types'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'

function AdminCourseCard({ course }: { course: ICourse }) {
	const pathname = usePathname()

	const onToggleStatus = () => {
		let upd
		let not

		if (course.published) {
			upd = updateCourse(course._id, { published: false }, pathname)
			not = sendNotification(
				course.instructor.clerkId,
				'messageCourseUnpublished'
			)
		} else {
			upd = updateCourse(course._id, { published: true }, pathname)
			not = sendNotification(
				course.instructor.clerkId,
				'messageCourseUnpublished'
			)
		}

		const promise = Promise.all([upd, not])

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated!',
			error: 'Something went wrong!',
		})
	}

	return (
		<Card className='w-full'>
			<CardContent className='relative h-56 w-full'>
				<Image
					fill
					src={course.previewImage}
					alt={course.title}
					className='rounded-md object-cover'
				/>
			</CardContent>
			<div className='my-4 flex flex-col space-y-2 px-2'>
				<h2 className='line-clamp-1 font-spaceGrotesk text-2xl font-bold'>
					{course.title}
				</h2>

				<Separator />

				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<Image
							src={course.instructor.picture}
							alt={course.instructor.fullName}
							width={40}
							height={40}
							className='rounded-full object-cover'
						/>
						<p className='text-sm text-muted-foreground'>
							{course.instructor.fullName}
						</p>
					</div>

					<Button
						className='w-fit font-spaceGrotesk font-bold'
						rounded={'full'}
						size={'sm'}
						variant={course.published ? 'destructive' : 'default'}
						onClick={onToggleStatus}
					>
						{course.published ? 'Unpublish' : 'Publish'}
					</Button>
				</div>
			</div>
		</Card>
	)
}

export default AdminCourseCard
