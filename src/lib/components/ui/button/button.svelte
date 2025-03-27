<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';

	//
	// VARIANTS
	//

	/**
	 * @description
	 * Applies different styles to the button using `tailwind-variants` based on
	 * the chosen `variant` and `size` props.
	 *
	 * @property `variant`: Defines the color style of the button.
	 *
	 * @defaultValue `"primary"`
	 *
	 * @property `size`: Defines the size of the button.
	 *
	 * @defaultValue `"md"`
	 */
	export const buttonVariants = tv({
		base: 'focus-visible:ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-75 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
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

	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

	//
	// BUTTON ELEMENT PROPS
	//

	type ButtonElementBaseProps = {
		/** @description The `href` prop is disallowed unless `type` is `undefined`. */
		href?: never;
	};

	type ButtonElementProps = WithElementRef<
		ButtonElementBaseProps & HTMLButtonAttributes,
		HTMLButtonElement
	>;

	//
	// ANCHOR ELEMENT PROPS
	//

	type AnchorElementBaseProps = {
		/** @description The `type` prop is disallowed unless ´href` is `undefined`. */
		type?: never;

		/** @description Explicitly require `href`. */
		href: NonNullable<HTMLAnchorAttributes['href']>;
	};

	type AnchorElementProps = WithElementRef<
		AnchorElementBaseProps & Omit<HTMLAnchorAttributes, 'href'>,
		HTMLAnchorElement
	>;

	//
	// BUTTON PROPS
	//

	type ButtonBaseProps = {
		/**
		 * @description Applies color styles to the button.
		 *
		 * @defaultValue `"primary"`
		 */
		variant?: ButtonVariant;

		/**
		 * @description Applies size styles to the button.
		 *
		 * @defaultValue `"md"`
		 */
		size?: ButtonSize;
	};

	export type ButtonProps = ButtonBaseProps & (ButtonElementProps | AnchorElementProps);
</script>

<script lang="ts">
	import { addRippleEffect, cn } from '$lib/utils';
	import { onMount } from 'svelte';

	let {
		children,
		href,
		class: className,
		variant = 'primary',
		size = 'md',
		// Cast 'button' to HTMLButtonAttributes['type'] to ensure compatibility with possible
		// undefined or valid type values.
		type = 'button' as HTMLButtonAttributes['type'],
		ref = $bindable(null),
		...restProps
	}: ButtonProps = $props();

	const buttonClasses = cn(buttonVariants({ variant, size }), className);

	onMount(() => {
		if (!ref) return;
		// This will make an ripple animation appear each time interaction happens.
		addRippleEffect(ref);
	});
</script>

{#if href}
	<a
		bind:this={ref}
		class={buttonClasses}
		{href}
		{...restProps as HTMLAnchorAttributes}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		class={buttonClasses}
		{type}
		{...restProps as HTMLButtonAttributes}
	>
		{@render children?.()}
	</button>
{/if}
