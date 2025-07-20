'use server'

import Review from '@/database/review.model'
import User from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { GetPaginationParams, ICreateUser, IUpdateUser } from './types'

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
		throw new Error('Error creating user, Please try again')
	}
}

export const updateUser = async (data: IUpdateUser) => {
	try {
		await connectToDatabase()
		const { clerkId, updatedData, path } = data
		await User.findOneAndUpdate({ clerkId }, updatedData)

		if (path) return revalidatePath(path)
	} catch (error) {
		throw new Error('Error updating user. Please try again.')
	}
}

export const getUserById = async (clerkId: string) => {
	try {
		await connectToDatabase()
		return User.findOne({ clerkId })
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const getUser = async (clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId }).select(
			'fullName picture clerkId email role isAdmin'
		)

		return JSON.parse(JSON.stringify(user))
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const getUserReviews = async (clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId }).select('_id')

		const reviews = await Review.find({ user: user._id })
			.sort({ createdAt: -1 })
			.populate({ path: 'user', model: User, select: 'fullName picture' })
			.populate({ path: 'course', model: 'Course', select: 'title' })

		return reviews
	} catch (error) {
		throw new Error('Error fetching user reviews. Please try again')
	}
}

export const getAdminInstructors = async (params: GetPaginationParams) => {
	try {
		await connectToDatabase()
		const { page = 1, pageSize = 3 } = params

		const skipAmount = (page - 1) * pageSize

		const instructors = await User.find({ role: 'instructor' })
			.skip(skipAmount)
			.limit(pageSize)
			.sort({ createdAt: -1 })

		const totalInstructor = await User.countDocuments({ role: 'instructor' })
		const isNext = totalInstructor > skipAmount + instructors.length

		return { instructors, isNext, totalInstructor }
	} catch (error) {
		throw new Error('Error getting instructor!')
	}
}

export const getInstructors = async () => {
	try {
		await connectToDatabase()
		return await User.find({ approvedInstructor: true }).select(
			'isAdmin role email website youtube github job clerkId'
		)
	} catch (error) {
		throw new Error('Error getting instructors!')
	}
}

export const getRole = async (clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId }).select('role isAdmin')
		return user
	} catch (error) {
		throw new Error('Error getting role!')
	}
}
