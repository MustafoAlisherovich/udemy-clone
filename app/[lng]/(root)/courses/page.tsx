import { getAllCourses } from '@/actions/course.action'
import { SearchParamsProps } from '@/app.types'
import TopBar from '@/components/shared/top-bar'
import { Metadata } from 'next'
import AllCourses from './_components/all-courses'

export const metadata: Metadata = {
	title: 'Praktikum | Barcha kurslar',
	description:
		"Platformamizda mavjud bo'lgan barcha kurslar ro'yxati. O'zingizga mos kursni toping va o'rganishni boshlang!",
}

async function Page({ searchParams }: SearchParamsProps) {
	const resultJSON = await getAllCourses({
		page: searchParams.page ? +searchParams.page : 1,
		filter: searchParams.filter,
		searchQuery: searchParams.q,
	})

	const result = JSON.parse(JSON.stringify(resultJSON))

	return (
		<>
			<TopBar label='allCourses' description='allCourseDescription' />
			<AllCourses result={result} />
		</>
	)
}

export default Page
