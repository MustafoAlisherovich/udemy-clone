import { getFeaturedCourse } from '@/actions/course.action'
import Categories from './_components/categories'
import FeaturedCourses from './_components/featured-courses'
import Hero from './_components/hero'
import Instructor from './_components/instructor'
import LearningJourney from './_components/learning-journey'

async function Page() {
	const coursesJSON = await getFeaturedCourse()

	const courses = JSON.parse(JSON.stringify(coursesJSON))

	console.log(courses)

	return (
		<>
			<Hero />
			<FeaturedCourses courses={courses} />
			<Categories />
			<Instructor />
			<LearningJourney />
		</>
	)
}

export default Page
