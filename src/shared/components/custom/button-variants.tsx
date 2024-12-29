/**
 * @fileoverview This module provides button variants for different actions and styles.
 * Each button variant is a styled version of the base Button component.
 *
 * @module ButtonVariants
 * @requires ../ui/button
 * @requires @/lib/utils
 */

import { Button } from "@/shared/components/ui/button"
import { cn } from "@/shared/helpers/cn"
import { type ButtonProps } from "@/shared/components/ui/button"

/**
 * ActionButton component
 *
 * @description A button variant styled for general actions with a dark background.
 *
 * @param {ButtonProps} props - The properties passed to the button component.
 * @returns {JSX.Element} A styled button component.
 */
export const ActionButton = ({ className, ...props }: ButtonProps): JSX.Element => (
  <Button
    variant="default"
    className={cn(
      "bg-bg text-white hover:bg-[#2A2A2A] border border-border",
      className
    )}
    {...props}
  />
)

/**
 * DestructiveButton component
 *
 * @description A button variant styled for destructive actions with a red background.
 *
 * @param {ButtonProps} props - The properties passed to the button component.
 * @returns {JSX.Element} A styled button component.
 */
export const DestructiveButton = ({ className, ...props }: ButtonProps) => (
  <Button
    variant="destructive"
    className={cn(
      "bg-[#3d1e1e] text-red-400 hover:bg-[#4a2020] border border-red-900",
      className
    )}
    {...props}
  />
)

/**
 * PrimaryButton component
 *
 * @description A button variant styled for primary actions with a primary color background.
 *
 * @param {ButtonProps} props - The properties passed to the button component.
 * @returns {JSX.Element} A styled button component.
 */
export const PrimaryButton = ({ className, ...props }: ButtonProps) => (
  <Button
    variant="default"
    className={cn(
      "bg-primary hover:bg-primary/90 text-black",
      className
    )}
    {...props}
  />
)