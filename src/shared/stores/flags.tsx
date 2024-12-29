/**
 * @file flags.tsx
 * @description Feature flag system wrapper that switches between Context and Zustand implementations
 * based on the useZustandStore feature flag.
 */

import { ReactNode } from 'react'
import { FlagsProvider, useFlags as useContextFlags } from './flags.context'
import { useFlagsStore } from './flags.store'
import { FeatureFlagState } from '@/shared/types/feature-flags'

interface FlagsWrapperProps {
    children: ReactNode
}

/**
 * Wrapper component that provides feature flags functionality
 * It uses either Context or Zustand based on the useZustandStore feature flag
 */
export function FlagsWrapper({ children }: FlagsWrapperProps) {
    // We need to use Zustand initially to check if we should switch to Context
    const shouldUseZustand = useFlagsStore((state) => state.isFeatureEnabled('useZustandStore'))

    if (shouldUseZustand) {
        return <>{children}</>
    }

    return <FlagsProvider>{children}</FlagsProvider>
}

/**
 * Hook to access feature flags
 * It automatically uses either Context or Zustand based on the useZustandStore feature flag
 * @returns {FeatureFlagState} The current flags state and methods to modify it
 */
export function useFlags(): FeatureFlagState {
    // Always call both hooks to satisfy React's rules of hooks
    const zustandFlags = useFlagsStore()
    const contextFlags = useContextFlags()

    // Use the Zustand value to determine which implementation to return
    const shouldUseZustand = zustandFlags.isFeatureEnabled('useZustandStore')

    // Return the appropriate implementation based on the feature flag
    return shouldUseZustand ? zustandFlags : contextFlags
}

// Export both implementations for direct access if needed
export { useContextFlags, useFlagsStore }