'use server'

import { connectToDatabase } from '@/lib/mongoose'
import stripe from '@/lib/stripe'
import { generateNumericId } from '@/lib/utils'
import { attachPayment, getCustomer } from './customer.action'

export const payment = async (
	price: number,
	clerkId: string,
	paymentMethod: string
) => {
	try {
		await connectToDatabase()
		const customer = await getCustomer(clerkId)
		await attachPayment(paymentMethod, customer.id)
		const paymentIntent = await stripe.paymentIntents.create({
			amount: price * 100,
			currency: 'usd',
			customer: customer.id,
			payment_method: paymentMethod,
			metadata: { orderId: generateNumericId() },
		})

		return paymentIntent.client_secret
	} catch (error) {
		const result = error as Error
		throw new Error(result.message)
	}
}

export const retrievePayment = async (pi: string) => {
	try {
		return await stripe.paymentIntents.retrieve(pi, {
			expand: ['payment_method'],
		})
	} catch (error) {
		const result = error as Error
		throw new Error(result.message)
	}
}

export const applyCoupon = async (code: string) => {
	try {
		const coupon = await stripe.coupons.retrieve(code)

		return JSON.parse(JSON.stringify(coupon))
	} catch (error) {
		const result = error as Error
		throw new Error(result.message)
	}
}

export const getBalance = async () => {
	try {
		const data = await stripe.balance.retrieve()
		const totalAvaliable = data.available.reduce(
			(acc, cur) => acc + cur.amount,
			0
		)
		const totalPending = data.pending.reduce((acc, cur) => acc + cur.amount, 0)

		return totalAvaliable + totalPending
	} catch (error) {
		const result = error as Error
		throw new Error(result.message)
	}
}
