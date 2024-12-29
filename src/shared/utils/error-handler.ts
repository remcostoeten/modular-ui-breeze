import { toast } from "sonner";

interface ErrorContext {
  component?: string;
  action?: string;
  [key: string]: unknown;
}

/**
 * Handle errors in a consistent way across the application
 * @param error - The error to handle
 * @param context - Additional context about where the error occurred
 */
export function handleError(error: unknown, context: ErrorContext = {}): void {
  // Log the error with context
  console.error("Error occurred:", {
    error,
    context,
    timestamp: new Date().toISOString(),
  });

  // Show user-friendly error message
  const message =
    error instanceof Error ? error.message : "An unexpected error occurred";
  toast.error(message);

  // In a real application, you might want to:
  // 1. Send error to error tracking service (e.g., Sentry)
  // 2. Show different messages based on error type
  // 3. Handle specific error cases differently
  // 4. Retry operations that failed
}
