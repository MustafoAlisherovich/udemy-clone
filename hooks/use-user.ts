import { getUser } from '@/actions/user.action'
import { IUser } from '@/app.types'
import { useAuth } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

function UseUser() {
	const [user, setUser] = useState<IUser | null>(null)

	const { userId } = useAuth()

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getUser(userId!)
				setUser(data)
			} catch (error) {
				setUser(null)
			}
		}

		if (userId) {
			getData()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return { user }
}

export default UseUser
