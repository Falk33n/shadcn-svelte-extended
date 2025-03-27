<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';

	//
	// VARIANTS
	//

	/**
	 * @description
	 * Applies different styles to the alert using `tailwind-variants` based on
	 * the chosen `variant` prop.
	 *
	 * @property `variant`: Defines the color style of the alert.
	 *
	 * @defaultValue `"info"`
	 */
	export const alertVariants = tv({
		base: '[&>svg]:text-foreground relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg~*]:pl-7',
		variants: {
			variant: {
				info: 'bg-background text-foreground',
				destructive:
					'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
			},
		},
		defaultVariants: {
			variant: 'info',
		},
	});

	export type AlertVariant = VariantProps<typeof alertVariants>['variant'];

	//
	// TYPES
	//

	type AlertBaseProps = {
		/**
		 * @description Applies color styles to the alert.
		 *
		 * @defaultValue `"info"`
		 */
		variant?: AlertVariant;
	};

	export type AlertProps = AlertBaseProps &
		WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		variant = 'info',
		ref = $bindable(null),
		...restProps
	}: AlertProps = $props();
</script>

<div
	bind:this={ref}
	class={cn(alertVariants({ variant }), className)}
	{...restProps}
	role="alert"
>
	{@render children?.()}
</div>
