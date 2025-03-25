import { tv, type VariantProps } from 'tailwind-variants';

/**
 * Applies different styles to the button using `tailwind-variants` based on
 * the chosen `variant` and `size` props.
 *
 * - `variant`: Defines the color style of the button.
 *   @defaultValue `"primary"`
 *
 * - `size`: Defines the size of the button.
 *   @defaultValue `"md"`
 */
export const buttonVariants = tv({
	base: 'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-75 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	variants: {
		variant: {
			primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
			destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outlined:
				'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline',
		},
		size: {
			sm: 'h-9 rounded-md px-3',
			md: 'h-10 px-4 py-2',
			lg: 'h-11 rounded-md px-8',
			icon: 'size-10',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

/**
 * @description Color styles for the button.
 */
export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];

/**
 * @description Size styles for the button.
 */
export type ButtonSize = VariantProps<typeof buttonVariants>['size'];
