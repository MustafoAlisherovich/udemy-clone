'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
	src: string
	alt: string
	className?: string
}

function CustomImage({ src, alt, className }: Props) {
	const [loading, setLoading] = useState(true)

	return (
		<Image
			src={src}
			alt={alt}
			fill
			sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw scale-100 blur-0 grayscale-0'
			className={cn(
				'object-cover duration-700 ease-in-out transition-all',
				loading && 'scale-110 blur-2xl grayscale',
				className
			)}
			onLoad={() => setLoading(false)}
		/>
	)
}

export default CustomImage
