import {create } from 'zustand'

interface AuthStore {
    token: string | null
    setToken: (token: string) => void
    user: any
    setUser: (user: any) => void
    logout: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
    token: null,
    setToken: (token: string) => set({ token }),
    user: null,
    setUser: (user: any) => set({ user }),
    logout: () => set({ token: null, user: null }),
}))

export default useAuthStore
