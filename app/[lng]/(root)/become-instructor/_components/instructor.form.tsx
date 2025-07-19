'use client'

import { updateUser } from '@/actions/user.action'
import FillLoading from '@/components/shared/fill-loading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
	basicInstructorSchema,
	bioSchema,
	socialMediaSchema,
} from '@/lib/validation'
import { useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { z } from 'zod'
import FirstForm from './first.form'
import Header from './header'
import SecondForm from './second.form'
import ThirdForm from './third.form'

function InstructorForm() {
	const [progress, setProgress] = useState(33)
	const [step, setStep] = useState(1)
	const [loading, setLoading] = useState(false)
	const { userId } = useAuth()

	const firstForm = () => {
		const onSubmit = async (values: z.infer<typeof basicInstructorSchema>) => {
			setLoading(true)
			const data = { fullName: values.name, phone: values.phone }

			try {
				await updateUser({ clerkId: userId!, updatedData: data })
				setProgress(66)
				setStep(2)
			} finally {
				setLoading(false)
			}
		}

		return (
			<>
				<Header
					title='Become an Instructor'
					description='Teach what you love. Reach millions of students around the world. We provide the tools and skills to teach what you love.'
				/>

				<FirstForm onHandler={onSubmit} />
			</>
		)
	}

	const secondForm = () => {
		const onSubmit = async (values: z.infer<typeof socialMediaSchema>) => {
			setLoading(true)

			try {
				await updateUser({ clerkId: userId!, updatedData: values })
				setProgress(100)
				setStep(3)
			} finally {
				setLoading(false)
			}
		}

		return (
			<>
				<Header
					title='Social media'
					description='Teach what you love. Reach millions of students around the world. We provide the tools and skills to teach what you love.'
				/>

				<SecondForm onHandler={onSubmit} />
			</>
		)
	}

	const thirdForm = () => {
		const onSubmit = async (values: z.infer<typeof bioSchema>) => {
			setLoading(true)

			try {
				await updateUser({
					clerkId: userId!,
					updatedData: { ...values, approvedInstructor: true },
				})
				setStep(4)
			} finally {
				setLoading(false)
			}
		}

		return (
			<>
				<Header
					title='Bio and Profile'
					description='Teach what you love. Reach millions of students around the world. We provide the tools and skills to teach what you love.'
				/>

				<ThirdForm onHandler={onSubmit} />
			</>
		)
	}

	const submissionContent = () => {
		return (
			<div className='flex flex-col items-center justify-center'>
				<Image
					src={'/assets/success.png'}
					alt='success'
					width={200}
					height={200}
					className='text-center'
				/>
				<h1 className='font-spaceGrotesk text-xl font-bold'>
					Thank you for your submission.
				</h1>
				<p className='text-center text-xs text-muted-foreground'>
					We will review your application and get back to you shortly.
				</p>
				<p className='text-center text-xs text-muted-foreground'>
					Please check notifications for updates.
				</p>
				<Button className='mt-2' asChild>
					<Link href={'/profile/notifications'}>
						<span>Notification</span>
					</Link>
				</Button>
			</div>
		)
	}

	return (
		<Card className='relative bg-gradient-to-b from-background via-secondary to-background'>
			{loading && <FillLoading />}
			<CardContent className='py-2'>
				{step !== 4 && (
					<>
						<Progress value={progress} />
						<div className='my-2 grid grid-cols-3'>
							<div></div>
							<div className='text-center font-spaceGrotesk font-bold'>
								{step}/3
							</div>
							<div />
						</div>
					</>
				)}

				{step === 1 && firstForm()}
				{step === 2 && secondForm()}
				{step === 3 && thirdForm()}
				{step === 4 && submissionContent()}
			</CardContent>
		</Card>
	)
}

export default InstructorForm
