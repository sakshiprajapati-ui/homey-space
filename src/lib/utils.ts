// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { tv } from "tailwind-variants"

// Utility function to merge classes
export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs)
}

// Optional: example using tailwind-variants
export const button = tv({
  base: "px-4 py-2 rounded-lg font-medium transition-colors",
  variants: {
    intent: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    },
    size: {
      sm: "text-sm py-1 px-2",
      lg: "text-lg py-3 px-6",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "sm",
  },
})
