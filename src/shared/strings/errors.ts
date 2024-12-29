export const ERROR_STRINGS = {
  GENERIC: {
    UNKNOWN: "An unexpected error occurred",
    NETWORK: "Network error occurred. Please check your connection.",
    UNAUTHORIZED: "You don't have permission to perform this action.",
    NOT_FOUND: (resource: string) => `${resource} not found`,
  },
  PROJECT: {
    NOT_FOUND: "The requested project could not be found.",
    DELETE_FAILED: "Failed to delete the project. Please try again.",
    UPDATE_FAILED: "Failed to update the project. Please try again.",
  },
  DATABASE: {
    CONNECTION: "Database connection error. Please try again later.",
    OPERATION: "Database operation failed. Please try again later.",
  },
  VALIDATION: {
    REQUIRED: (field: string) => `${field} is required`,
    INVALID: (field: string) => `Invalid ${field}`,
    MIN_LENGTH: (field: string, length: number) =>
      `${field} must be at least ${length} characters`,
    MAX_LENGTH: (field: string, length: number) =>
      `${field} must be at most ${length} characters`,
  },
} as const;
