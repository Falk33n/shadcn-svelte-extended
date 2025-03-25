import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export { addRippleEffect } from './add-ripple-effect';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
