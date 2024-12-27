import { Button } from "./button"
import { cn } from "@/lib/utils"
import { type ButtonProps } from "./button"

export const ActionButton = ({ className, ...props }: ButtonProps) => (
  <Button
    variant="default"
    className={cn(
      "bg-[#1C1C1C] text-white hover:bg-[#2A2A2A] border border-gray-800",
      className
    )}
    {...props}
  />
)

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