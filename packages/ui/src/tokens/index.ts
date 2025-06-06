import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colors = {
  primary: "green-600",
  accent: "purple-600",
  text: "gray-800",
  muted: "gray-500",
  background: "white",
  surface: "gray-50",
  error: "red-500",
  warning: "yellow-500",
  success: "green-500",
  info: "blue-500"
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
