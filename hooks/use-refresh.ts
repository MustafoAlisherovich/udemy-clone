import { create } from 'zustand'

interface IRefresh {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

export const useRefresh = create<IRefresh>(set => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}))
