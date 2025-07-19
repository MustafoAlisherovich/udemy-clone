interface Props {
	title: string
	description: string
}

function Header({ title, description }: Props) {
	return (
		<>
			<h2 className='font-spaceGrotesk text-xl font-bold'>{title}</h2>
			<p className='text-xs text-muted-foreground'>{description}</p>
		</>
	)
}

export default Header
