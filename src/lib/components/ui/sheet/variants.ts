import { tv, type VariantProps } from 'tailwind-variants';

/**
 * @description
 * Applies different animation styles to the sheet using `tailwind-variants` based on
 * the chosen `side` prop.
 *
 * @property `side`: Defines the side of the screen the sheet will appear.
 * @defaultValue `"right"`
 */
export const sheetVariants = tv({
	base: 'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
	variants: {
		side: {
			top: 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b',
			bottom: 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t',
			left: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
			right: 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
		},
	},
	defaultVariants: {
		side: 'right',
	},
});

export type SheetSide = VariantProps<typeof sheetVariants>['side'];
