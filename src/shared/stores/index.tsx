/**
 * @file index.ts
 * @description Store configuration system that allows users to choose between Context and Zustand implementations
 */

import React, { ReactNode } from "react";
import {
  FlagsProvider as ContextProvider,
  useFlags as useContextFlags,
} from "./flags.context";
import { useFlagsStore } from "./flags.store";
import { FeatureFlagState, FeatureId } from "@/shared/types/feature-flags";

// Type for the implementation exports
interface ImplementationExports {
  FlagsProvider: React.FC<{ children: ReactNode }>;
  useFlags: () => FeatureFlagState;
}

// Zustand implementation
const ZustandImplementation = (): FeatureFlagState => {
  return useFlagsStore();
};

// Select implementation based on config
const implementation: ImplementationExports = {
  FlagsProvider: ({ children }) =>
    React.createElement(React.Fragment, null, children),
  useFlags: ZustandImplementation,
};

// Export the selected implementation
export const { FlagsProvider, useFlags } = implementation;
