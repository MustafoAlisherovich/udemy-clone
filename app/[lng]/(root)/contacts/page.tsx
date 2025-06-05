import ContactForm from '@/components/forms/contact.form'
import TopBar from '@/components/shared/top-bar'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import { Mail, Phone } from 'lucide-react'

async function Page({ params: { lng } }: LngParams) {
	const { t } = await translation(lng)

	return (
		<>
			<TopBar label='contacts' />
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48517.396729721775!2d70.8899250712577!3d40.53413668346249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38baeeeb2e1c3e7f%3A0x816d723cc5842908!2sKokand%2C%20Fergana%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1749136440483!5m2!1sen!2s'
				loading='lazy'
				className='h-96 w-full'
			/>

			<div className='container mx-auto max-w-6xl'>
				<div className='mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1'>
					<div className='flex flex-col'>
						<h1 className='font-spaceGrotesk text-4xl font-bold'>
							{t('contactTitle')}
						</h1>
						<p className='mt-2 text-muted-foreground'>
							{t('contactDescription')}
						</p>

						<div className='mt-12 flex items-center gap-3'>
							<Mail className='size-4' />
							<p className='text-sm'>mustafoalisherovic@gmail.com</p>
						</div>
						<div className='mt-2 flex items-center gap-3'>
							<Phone className='size-4' />
							<p className='text-sm'>+98 02 296 4902</p>
						</div>
					</div>

					<div>
						<h1 className='mb-2 font-spaceGrotesk text-4xl font-bold'>
							{t('contactForm')}
						</h1>
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
