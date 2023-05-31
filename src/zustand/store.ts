import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type Store = {
    userId: string
    name: string
    email: string
    phone: string
    cpf: string
}
type Setters = {
    setUserId: (id: string) => void
    setName: (name: string) => void
    setEmail: (email: string) => void
    setPhone: (phone: string) => void
    setCpf: (cpf: string) => void
}

const useStore = create<Store & Setters>()(
    persist(
        (set) => ({
            userId: '',
            name: '',
            email: '',
            phone: '',
            cpf: '',
            setUserId: (newId: string) => set(() => ({ userId: newId })),
            setName: (name: string) => set(() => ({ name: name })),
            setEmail: (email: string) => set(() => ({ email: email })),
            setPhone: (phone: string) => set(() => ({ phone: phone })),
            setCpf: (cpf: string) => set(() => ({ cpf: cpf })),
        }),
        {
            name: 'global',
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useStore
