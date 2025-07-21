import TopBar from '@/components/shared/top-bar'
import { Metadata } from 'next'
import Image from 'next/image'
import InstructorForm from './_components/instructor.form'

export const metadata: Metadata = {
	title: "Udemy | Muallim bo'lish",
	description:
		"Udemy-clone platformasida muallim bo'lish uchun ariza qoldiring. O'zingiziga mos kursni tuzing va o'rganishni boshlang!",
}

function Page() {
	return (
		<>
			<TopBar
				label='becomeInstructor'
				description='becomeInstructorDescription'
			/>

			<div className='container mx-auto mt-12 min-h-[50vh] max-w-6xl'>
				<div className='grid grid-cols-2 gap-2'>
					<InstructorForm />

					<Image
						src={'/assets/instructor.png'}
						alt='Instructor'
						width={430}
						height={430}
						className='place-self-end'
					/>
				</div>
			</div>
		</>
	)
}

export default Page
