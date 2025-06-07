import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colors = {
  primary: "cop-green-600",
  accent: "cop-purple-600",
  text: "gray-800 dark:gray-200",
  muted: "gray-500 dark:gray-400",
  background: "white dark:gray-900",
  surface: "gray-50 dark:gray-800",
  error: "red-500 dark:red-400",
  warning: "yellow-500 dark:yellow-400",
  success: "green-500 dark:green-400",
  info: "blue-500 dark:blue-400"
};

export const spacing = {
  xs: "1",
  sm: "2",
  md: "4",
  lg: "6",
  xl: "8",
  "2xl": "12"
};

export const borderRadius = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full"
};

export const shadows = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl"
};
