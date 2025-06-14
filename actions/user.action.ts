'use server'

import { connectToDatabase } from '@/lib/mongoose'
import { ICreateUser, IUpdateUser } from './types'
import User from '@/database/user.model'

export const createUser = async (data: ICreateUser) => {
	try {
		await connectToDatabase()
		const { clerkId, email, fullName, picture } = data
		const isExist = await User.findOne({ clerkId })

		if (isExist) {
			const updatedUser = await User.findOneAndUpdate(
				{ email },
				{ fullName, picture, clerkId },
				{ new: true }
			)

			return updatedUser
		}

		const newUser = User.create(data)

		return newUser
	} catch (error) {
		console.log(error)
		throw new Error('Error creating user, Please try again')
	}
}

export const updateUser = async (data: IUpdateUser) => {
	try {
		await connectToDatabase()
		const { clerkId, updatedData } = data
		const updatedUser = await User.findOneAndUpdate({ clerkId }, updatedData, {
			new: true,
		})
		return updatedUser
	} catch (error) {
		console.log(error)
		throw new Error('Error updating user. Please try again')
	}
}
