/**
 * @file feature-flags.ts
 * @description Type definitions for the feature flags system
 */

/**
 * Unique identifiers for each feature flag
 */
export type FeatureId =
  | "useZustand"
  | "darkMode"
  | "animations"
  | "useZustandStore";

/**
 * Configuration for feature-specific animations
 */
export interface AnimationConfig {
  duration: number;
  easing: string;
}

/**
 * Configuration for a single feature
 */
export interface FeatureConfig<T = unknown> {
  enabled: boolean;
  metadata?: T;
}

/**
 * Global feature flags configuration
 */
export interface FeatureFlags {
  features: Record<FeatureId, FeatureConfig>;
  animations: {
    globalEnabled: boolean;
  };
}

/**
 * Extended state interface that includes methods to interact with feature flags
 */
export interface FeatureFlagState {
  flags: FeatureFlags;
  features: Record<FeatureId, FeatureConfig>;
  animations: Record<string, AnimationConfig>;
  isFeatureEnabled: (featureId: FeatureId) => boolean;
  setFeatureEnabled: (featureId: FeatureId, enabled: boolean) => void;
  isAnimationEnabled: (animationId: string) => boolean;
  setAnimationEnabled: (animationId: string, enabled: boolean) => void;
  setAnimationConfig: (animationId: string, config: AnimationConfig) => void;
  setGlobalAnimations: (enabled: boolean) => void;
  getFeatureMetadata: <T>(featureId: FeatureId) => T | undefined;
}

/**
 * Default configuration for all feature flags
 */
export const DEFAULT_FEATURE_FLAGS: FeatureFlags = {
  features: {
    useZustand: { enabled: false },
    darkMode: { enabled: true },
    animations: { enabled: true },
    useZustandStore: { enabled: false },
  },
  animations: {
    globalEnabled: true,
  },
};
