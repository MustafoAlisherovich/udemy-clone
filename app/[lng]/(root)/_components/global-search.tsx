import { Button } from '@/components/ui/button'
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils'
import { debounce } from 'lodash'
import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent } from 'react'

function GlobalSearch() {
	const pathname = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value.toLowerCase()
		const isCoursePage = pathname.split('/').includes('courses')

		if (text && text.length > 2) {
			const newUrl = formUrlQuery({
				params: searchParams.toString(),
				key: 'q',
				value: text,
				toCourses: !isCoursePage,
			})

			router.push(newUrl)
		} else {
			const newUrl = removeKeysFromQuery({
				params: searchParams.toString(),
				keysToRemove: ['q'],
			})

			router.push(newUrl)
		}
	}

	const debounceSearch = debounce(handleSearch, 300)

	return (
		<div className='search-box'>
			<Button
				size={'icon'}
				variant={'ghost'}
				className='btn-search'
				aria-label='search-btn'
			>
				<Search />
			</Button>
			<input
				type='text'
				className='input-search'
				placeholder='Type to Search...'
				onChange={debounceSearch}
			/>
		</div>
	)
}

export default GlobalSearch
