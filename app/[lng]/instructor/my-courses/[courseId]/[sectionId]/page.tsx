import { getLessons } from '@/actions/lesson.action'
import { getSectionById } from '@/actions/section.action'
import Header from '@/components/shared/header'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { MoveLeft, Settings, Settings2 } from 'lucide-react'
import Link from 'next/link'
import Action from './_components/action'
import Lessons from './_components/lessons'
import SectionField from './_components/section-field'

interface Params {
	params: { sectionId: string; courseId: string }
}

async function Page({ params }: Params) {
	const sectionJSON = await getSectionById(params.sectionId)
	const lessonsJSON = await getLessons(params.sectionId)

	const section = JSON.parse(JSON.stringify(sectionJSON))
	const lessons = JSON.parse(JSON.stringify(lessonsJSON))

	return (
		<>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Link href={`/en/instructor/my-courses/${params.courseId}`}>
						<Button size={'icon'} variant={'outline'}>
							<MoveLeft />
						</Button>
					</Link>

					<Header
						title={section.title}
						description='Manage your section and see how it is performing.'
					/>
				</div>
				<Action {...section} />
			</div>
			<Separator className='my-3 bg-muted-foreground' />

			<div className='grid grid-cols-2 gap-4'>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						<span className='font-spaceGrotesk text-3xl font-medium'>
							Lessons
						</span>{' '}
						<Settings2 />
					</div>
					<Lessons section={section} lessons={lessons} />
				</div>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						<span className='font-spaceGrotesk text-3xl font-medium'>
							Section Field
						</span>{' '}
						<Settings />
					</div>
					<SectionField {...section} />
				</div>
			</div>
		</>
	)
}

export default Page
