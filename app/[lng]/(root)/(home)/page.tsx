import { getFeaturedCourse } from '@/actions/course.action'
import { getAdminInstructors } from '@/actions/user.action'
import Categories from './_components/categories'
import FeaturedCourses from './_components/featured-courses'
import Hero from './_components/hero'
import Instructor from './_components/instructor'
import LearningJourney from './_components/learning-journey'

async function Page() {
	const courses = await getFeaturedCourse()
	const instructorData = await getAdminInstructors({ pageSize: 4 })

	return (
		<>
			<Hero />
			<FeaturedCourses courses={JSON.parse(JSON.stringify(courses))} />
			<Categories />
			<Instructor
				instructors={JSON.parse(JSON.stringify(instructorData.instructors))}
			/>
			<LearningJourney />
		</>
	)
}

export default Page
