import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import {
    FeatureId,
    FeatureFlags,
    FeatureFlagState,
    AnimationConfig,
    DEFAULT_FEATURE_FLAGS
} from '@/shared/types/feature-flags'

const FeatureFlagsContext = createContext<FeatureFlagState | null>(null)

export function useFeatureFlags() {
    const context = useContext(FeatureFlagsContext)
    if (!context) {
        throw new Error('useFeatureFlags must be used within a FeatureFlagsProvider')
    }
    return context
}

interface FeatureFlagsProviderProps {
    children: ReactNode
    initialFlags?: FeatureFlags
}

export function FeatureFlagsProvider({
    children,
    initialFlags = DEFAULT_FEATURE_FLAGS
}: FeatureFlagsProviderProps) {
    const [flags, setFlags] = useState<FeatureFlags>(initialFlags)

    const isFeatureEnabled = useCallback(
        (featureId: FeatureId) => {
            return flags.features[featureId]?.enabled ?? false
        },
        [flags]
    )

    const isAnimationEnabled = useCallback(
        (animationId: string) => {
            if (!flags.animations?.globalEnabled) return false
            const feature = flags.features?.[animationId as FeatureId]
            return feature?.enabled ?? false
        },
        [flags]
    )

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

    const setAnimationEnabled = useCallback(
        (animationId: string, enabled: boolean) => {
            setFlags((prev) => ({
                ...prev,
                features: {
                    ...prev.features,
                    [animationId]: {
                        ...prev.features[animationId as FeatureId],
                        enabled
                    }
                }
            }))
        },
        []
    )

    const setAnimationConfig = useCallback(
        (animationId: string, config: AnimationConfig) => {
            setFlags((prev) => ({
                ...prev,
                features: {
                    ...prev.features,
                    [animationId]: {
                        ...prev.features[animationId as FeatureId],
                        animationConfig: config
                    }
                }
            }))
        },
        []
    )

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

    const getFeatureMetadata = useCallback(
        <T,>(featureId: FeatureId): T | undefined => {
            return flags.features[featureId]?.metadata as T | undefined
        },
        [flags]
    )

    const value: FeatureFlagState = {
        flags,
        features: flags.features,
        animations: {},  // This should be populated with actual animation configs if needed
        isFeatureEnabled,
        isAnimationEnabled,
        setFeatureEnabled,
        setAnimationEnabled,
        setAnimationConfig,
        setGlobalAnimations,
        getFeatureMetadata
    }

    return (
        <FeatureFlagsContext.Provider value={value}>
            {children}
        </FeatureFlagsContext.Provider>
    )
}