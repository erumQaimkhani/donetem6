import {  type ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// lib/utils.ts
// export function cn(...inputs: (string | undefined | null | false)[]): string {
//   return inputs.filter(Boolean).join(" ");
// }