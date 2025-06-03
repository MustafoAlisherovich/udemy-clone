'use client'

import { Languages } from 'lucide-react'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { lngs } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation'

function LanguageDropdown() {
	const { lng } = useParams()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'ghost'} size={'icon'}>
					<Languages />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-40'>
				<DropdownMenuGroup>
					{lngs.map(item => (
						<Link key={item.route} href={`/${item.route}`}>
							<DropdownMenuItem
								className={cn(
									'cursor-pointer',
									lng === item.route && 'bg-secondary'
								)}
							>
								<Image
									src={`/assets/locales/${item.route}.png`}
									alt={item.label}
									width={30}
									height={30}
								/>
								<span className='ml-2 font-spaceGrotesk font-medium'>
									{item.label}
								</span>
							</DropdownMenuItem>
						</Link>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageDropdown
