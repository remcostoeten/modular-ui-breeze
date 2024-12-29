import { en } from "./locales/en";

// Helper type to extract function parameter types
type ParamType<T> = T extends (params: infer P) => string ? P : never;

// Helper type to handle nested objects and functions
type TranslationValue = string | ((params: any) => string);
type TranslationObject = {
  [key: string]: TranslationValue | TranslationObject;
};

// Type for translation parameters
export type TranslationParams<
  T extends TranslationValue | TranslationObject,
  K extends string,
> = T extends (params: any) => string
  ? ParamType<T>
  : T extends TranslationObject
    ? K extends `${infer Prefix}.${infer Rest}`
      ? TranslationParams<T[Prefix], Rest>
      : never
    : never;

// Type for nested keys
export type NestedKeys<T> = T extends TranslationValue
  ? never
  : T extends object
    ? {
        [K in keyof T & string]: `${K}` | `${K}.${NestedKeys<T[K]>}`;
      }[keyof T & string]
    : never;

// Export types for use in other files
export type Translations = typeof en;
export type TranslationKey = NestedKeys<Translations>;

// Type-safe translation function
export interface TranslationFunction {
  <K extends TranslationKey>(
    key: K,
    params?: TranslationParams<Translations, K>
  ): string;
}

// Type for the translation hook return value
export interface UseTranslation {
  t: TranslationFunction;
  // Future additions:
  // setLanguage: (lang: string) => void
  // currentLanguage: string
}
