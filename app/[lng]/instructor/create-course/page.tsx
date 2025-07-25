import CourseFieldsForm from '@/components/forms/course-fields.form'
import Header from '@/components/shared/header'
import { Separator } from '@/components/ui/separator'

function Page() {
	return (
		<>
			<Header
				title='Create a course'
				description='Fill in the details below to create a new course'
			/>

			<div className='mt-4 rounded-md bg-background p-4'>
				<h3 className='font-spaceGrotesk text-lg font-medium'>
					Basic information
				</h3>
				<Separator className='my-3' />
				<CourseFieldsForm />
			</div>
		</>
	)
}

export default Page
