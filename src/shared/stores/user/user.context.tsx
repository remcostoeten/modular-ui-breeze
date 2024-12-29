import { createContext, useContext, useState, ReactNode } from 'react'

export interface User {
    name: string
    email: string
    avatar: string
}

interface UserContextType {
    user: User | null
    setUser: (user: User | null) => void
}

const UserContext = createContext<UserContextType | null>(null)

export function useUser() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

interface UserProviderProps {
    children: ReactNode
    initialUser?: User | null
}

export function UserProvider({ children, initialUser = null }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(initialUser)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}