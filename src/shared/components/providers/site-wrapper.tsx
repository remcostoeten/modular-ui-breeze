import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { FlagsWrapper } from '@/shared/stores/flags'
import { UserProvider } from '@/shared/stores/user/user.context'
import { ThemeProvider } from '@/shared/stores/theme.store'

interface SiteWrapperProps {
    children: ReactNode
}

export function SiteWrapper({ children }: SiteWrapperProps) {
    return (
        <ThemeProvider>
            <FlagsWrapper>
                <UserProvider>
                    {children}
                    <Toaster position="top-center" />
                </UserProvider>
            </FlagsWrapper>
        </ThemeProvider>
    )
}