/**
 * @file flags.store.ts
 * @description Zustand implementation for managing feature flags and animation configurations.
 * This provides a Zustand-based solution for managing feature flags, animations,
 * and their associated metadata throughout the application.
 */

import { create } from "zustand";
import {
  FeatureId,
  FeatureFlags,
  FeatureFlagState,
  AnimationConfig,
  DEFAULT_FEATURE_FLAGS,
} from "@/shared/types/feature-flags";

/**
 * Zustand store for managing feature flags
 */
export const useFlagsStore = create<FeatureFlagState>((set, get) => ({
  ...DEFAULT_FEATURE_FLAGS,

  /**
   * Check if a specific feature is enabled
   * @param featureId - The ID of the feature to check
   * @returns {boolean} Whether the feature is enabled
   */
  isFeatureEnabled: (featureId: FeatureId) => {
    return get().features[featureId]?.enabled ?? false;
  },

  /**
   * Check if animations are enabled for a specific feature
   * @param featureId - The ID of the feature to check
   * @returns {boolean} Whether animations are enabled for the feature
   */
  isAnimationEnabled: (featureId: FeatureId) => {
    const state = get();
    if (!state.animations.globalEnabled) return false;
    const feature = state.features[featureId];
    return feature?.animationConfig?.enabled ?? false;
  },

  /**
   * Enable or disable a specific feature
   * @param featureId - The ID of the feature to modify
   * @param enabled - Whether to enable or disable the feature
   */
  setFeatureEnabled: (featureId: FeatureId, enabled: boolean) => {
    set((state) => ({
      features: {
        ...state.features,
        [featureId]: {
          ...state.features[featureId],
          enabled,
        },
      },
    }));
  },

  /**
   * Update the animation configuration for a specific feature
   * @param featureId - The ID of the feature to modify
   * @param config - The new animation configuration
   */
  setAnimationConfig: (featureId: FeatureId, config: AnimationConfig) => {
    set((state) => ({
      features: {
        ...state.features,
        [featureId]: {
          ...state.features[featureId],
          animationConfig: config,
        },
      },
    }));
  },

  /**
   * Enable or disable animations globally
   * @param enabled - Whether to enable or disable global animations
   */
  setGlobalAnimations: (enabled: boolean) => {
    set((state) => ({
      animations: {
        ...state.animations,
        globalEnabled: enabled,
      },
    }));
  },

  /**
   * Get metadata for a specific feature
   * @param featureId - The ID of the feature
   * @returns The feature's metadata, if any
   */
  getFeatureMetadata: <T>(featureId: FeatureId): T | undefined => {
    return get().features[featureId]?.metadata as T | undefined;
  },
}));
