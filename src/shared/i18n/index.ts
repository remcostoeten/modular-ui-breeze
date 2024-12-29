import { en } from "./locales/en";
import type {
  TranslationKey,
  TranslationFunction,
  UseTranslation,
} from "./types";

// Current language - in the future, this could be dynamic
const currentLocale = "en";
const translations = { en };

export const t: TranslationFunction = (key, params?) => {
  const keys = key.split(".");
  let value = translations[currentLocale];

  // Traverse the nested object
  for (const k of keys) {
    if (value === undefined) return key;
    value = value[k as keyof typeof value];
  }

  // If the value is a function (for parameterized strings), call it with params
  if (typeof value === "function") {
    return value(params);
  }

  return (value as string) || key;
};

// React hook for translations
export function useTranslation(): UseTranslation {
  return { t };
}

// Re-export types
export type { TranslationKey, UseTranslation };
