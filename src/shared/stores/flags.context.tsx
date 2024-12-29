/**
 * @file flags.context.tsx
 * @description Context implementation for managing feature flags and animation configurations.
 * This provides a React Context-based solution for managing feature flags, animations,
 * and their associated metadata throughout the application.
 */

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import {
    FeatureId,
    FeatureFlags,
    FeatureFlagState,
    AnimationConfig,
    DEFAULT_FEATURE_FLAGS
} from '@/shared/types/feature-flags'

const FlagsContext = createContext<FeatureFlagState | null>(null)

/**
 * Hook to access the flags context
 * @throws {Error} If used outside of FlagsProvider
 * @returns {FeatureFlagState} The current flags state and methods to modify it
 */
export function useFlags() {
    const context = useContext(FlagsContext)
    if (!context) {
        throw new Error('useFlags must be used within a FlagsProvider')
    }
    return context
}

interface FlagsProviderProps {
    children: ReactNode
    initialFlags?: FeatureFlags
}

/**
 * Provider component for the flags context
 * @param props.children - Child components that will have access to the flags context
 * @param props.initialFlags - Optional initial flags configuration
 */
export function FlagsProvider({
    children,
    initialFlags = DEFAULT_FEATURE_FLAGS
}: FlagsProviderProps) {
    const [flags, setFlags] = useState<FeatureFlags>(initialFlags)

    /**
     * Check if a specific feature is enabled
     * @param featureId - The ID of the feature to check
     * @returns {boolean} Whether the feature is enabled
     */
    const isFeatureEnabled = useCallback(
        (featureId: FeatureId) => {
            return flags.features[featureId]?.enabled ?? false
        },
        [flags]
    )

    /**
     * Check if animations are enabled for a specific feature
     * @param featureId - The ID of the feature to check
     * @returns {boolean} Whether animations are enabled for the feature
     */
    const isAnimationEnabled = useCallback(
        (featureId: FeatureId) => {
            if (!flags.animations.globalEnabled) return false
            const feature = flags.features[featureId]
            return feature?.animationConfig?.enabled ?? false
        },
        [flags]
    )

    /**
     * Enable or disable a specific feature
     * @param featureId - The ID of the feature to modify
     * @param enabled - Whether to enable or disable the feature
     */
    const setFeatureEnabled = useCallback(
        (featureId: FeatureId, enabled: boolean) => {
            setFlags((prev) => ({
                ...prev,
                features: {
                    ...prev.features,
                    [featureId]: {
                        ...prev.features[featureId],
                        enabled
                    }
                }
            }))
        },
        []
    )

    /**
     * Update the animation configuration for a specific feature
     * @param featureId - The ID of the feature to modify
     * @param config - The new animation configuration
     */
    const setAnimationConfig = useCallback(
        (featureId: FeatureId, config: AnimationConfig) => {
            setFlags((prev) => ({
                ...prev,
                features: {
                    ...prev.features,
                    [featureId]: {
                        ...prev.features[featureId],
                        animationConfig: config
                    }
                }
            }))
        },
        []
    )

    /**
     * Enable or disable animations globally
     * @param enabled - Whether to enable or disable global animations
     */
    const setGlobalAnimations = useCallback(
        (enabled: boolean) => {
            setFlags((prev) => ({
                ...prev,
                animations: {
                    ...prev.animations,
                    globalEnabled: enabled
                }
            }))
        },
        []
    )

    /**
     * Get metadata for a specific feature
     * @param featureId - The ID of the feature
     * @returns The feature's metadata, if any
     */
    const getFeatureMetadata = useCallback(
        <T,>(featureId: FeatureId): T | undefined => {
            return flags.features[featureId]?.metadata as T | undefined
        },
        [flags]
    )

    const value: FeatureFlagState = {
        ...flags,
        isFeatureEnabled,
        isAnimationEnabled,
        setFeatureEnabled,
        setAnimationConfig,
        setGlobalAnimations,
        getFeatureMetadata
    }

    return (
        <FlagsContext.Provider value={value}>
            {children}
        </FlagsContext.Provider>
    )
}