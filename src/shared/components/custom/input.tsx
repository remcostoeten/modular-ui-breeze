/**
 * @author Remco Stoeten
 * @description Input component that supports error states and messages
 */

import * as React from "react"
import { cn } from "@/shared/helpers/cn"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Indicates if the input is in an error state */
  error?: boolean
  /** Optional error message to display below the input */
  errorMessage?: string
}

/**
 * Input component that supports error states and messages
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Input placeholder="Email" />
 *
 * // With error state
 * <Input
 *   error={true}
 *   errorMessage="Please enter a valid email"
 *   placeholder="Email"
 * />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, errorMessage, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
            error && "border-destructive focus-visible:ring-destructive/20 focus-visible:border-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && errorMessage && (
          <p className="text-destructive text-sm mt-1.5">
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }11