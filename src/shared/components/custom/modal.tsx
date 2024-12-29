import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useKeyboardShortcut } from "@/shared/hooks/use-keyboard-shortcut"
import { FocusTrap } from "../ui/focus-trap"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog"
import { themeConfig } from "@/config/theme"

interface ModalWarningProps {
  icon?: React.ReactNode
  title: string
  description?: string
  variant?: "warning" | "error" | "info"
}

interface ModalInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

interface ModalActionProps {
  label: string
  onClick: () => void
  variant?: "outline" | "destructive" | "link" | "default" | "secondary" | "ghost"
  disabled?: boolean
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  className?: string
  showCloseButton?: boolean
  title?: string
  description?: string
  warning?: ModalWarningProps
  inputs?: ModalInputProps[]
  actions?: ModalActionProps[]
}

const getWarningStyles = (variant: ModalWarningProps["variant"] = "warning") => {
  switch (variant) {
    case "error":
      return "bg-[#3d1e1e] border-red-900"
    case "info":
      return "bg-[#1e2d3d] border-blue-900"
    default:
      return "bg-[#3d3d1e] border-yellow-900"
  }
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(({
  isOpen,
  onClose,
  children,
  className,
  showCloseButton = true,
  title,
  description,
  warning,
  inputs,
  actions
}, ref) => {
  // Handle escape key
  useKeyboardShortcut({
    shortcut: "Escape",
    callback: onClose,
    enabled: isOpen,
  })

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
        >
          <FocusTrap>
            <motion.div
              ref={ref}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={cn(
                "relative w-full rounded-lg p-6 shadow-lg bg-bg",
                className
              )}
            >
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              {/* Title */}
              {title && (
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg font-semibold text-white"
                >
                  {title}
                </motion.h2>
              )}

              {/* Description */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-2 text-sm text-gray-400"
                >
                  {description}
                </motion.p>
              )}

              {/* Warning Section */}
              {warning && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={cn(
                    "mt-6 rounded-md border p-4",
                    getWarningStyles(warning.variant)
                  )}
                >
                  <div className="flex items-start gap-3">
                    {warning.icon && (
                      <div className="text-red-400 bg-red-900/30 p-2 rounded">
                        {warning.icon}
                      </div>
                    )}
                    <div>
                      <p className="text-white font-medium">{warning.title}</p>
                      {warning.description && (
                        <p className="text-gray-400 text-sm mt-1">
                          {warning.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Input Section */}
              {inputs && inputs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 mt-6"
                >
                  {inputs.map((input, index) => (
                    <div key={index}>
                      <label className="text-sm text-gray-400 block mb-2">
                        {input.label}
                      </label>
                      <input
                        type="text"
                        value={input.value}
                        onChange={(e) => input.onChange(e.target.value)}
                        placeholder={input.placeholder}
                        className="w-full px-3 py-2 bg-[#2C2C2C] border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Main Content */}
              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  {children}
                </motion.div>
              )}

              {/* Action Buttons */}
              {actions && actions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-end gap-3 mt-6"
                >
                  {actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.onClick}
                      disabled={action.disabled}
                      className={cn(
                        "px-4 py-2 rounded-md font-medium transition-colors",
                        action.variant === "outline" && "border border-gray-700 text-white hover:bg-white/10",
                        action.variant === "destructive" && "bg-red-600 text-white hover:bg-red-700",
                        action.disabled && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {action.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </FocusTrap>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

Modal.displayName = "Modal"
