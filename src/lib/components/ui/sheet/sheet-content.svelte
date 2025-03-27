<script
	lang="ts"
	module
>
	import { Dialog as SheetPrimitive, type WithElementRef, type WithoutChild } from 'bits-ui';
	import { tv, type VariantProps } from 'tailwind-variants';

	//
	// VARIANTS
	//

	/**
	 * @description
	 * Applies different animation styles to the sheet content using `tailwind-variants` based on
	 * the chosen `side` prop.
	 *
	 * @property `side`: Defines the side of the screen the sheet will appear.
	 *
	 * @defaultValue `"right"`
	 */
	export const sheetContentVariants = tv({
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

	export type SheetContentSide = VariantProps<typeof sheetContentVariants>['side'];

	//
	// TYPES
	//

	type SheetContentBaseProps = {
		/**
		 * @description
		 * The props used for the sheet portal component.
		 * See https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/utilities/portal/types.ts
		 * for reference.
		 */
		portalProps?: SheetPrimitive.PortalProps;

		/** @description Adds an reference to the close trigger component */
		closeRef?: HTMLButtonElement | null;

		/**
		 * @description Defines the side of the screen the sheet content will appear.
		 *
		 * @defaultValue `"right"`
		 */
		side?: SheetContentSide;
	};

	export type SheetContentProps = SheetContentBaseProps &
		WithoutChild<WithElementRef<Omit<SheetPrimitive.ContentProps, 'ref'>, HTMLDivElement>>;
</script>

<script lang="ts">
	import { addRippleEffect, cn } from '$lib/utils';
	import XIcon from '@lucide/svelte/icons/x';
	import { onMount } from 'svelte';
	import SheetOverlay from './sheet-overlay.svelte';

	let {
		children,
		class: className,
		side = 'right',
		ref = $bindable(null),
		closeRef = $bindable(null),
		portalProps,
		...restProps
	}: SheetContentProps = $props();

	onMount(() => {
		if (!closeRef) return;
		// This will make an ripple animation appear each time interaction happens.
		addRippleEffect(closeRef);
	});
</script>

<SheetPrimitive.Portal {...portalProps}>
	<SheetOverlay />
	<SheetPrimitive.Content
		bind:ref
		class={cn(sheetContentVariants({ side }), className)}
		{...restProps}
	>
		{@render children?.()}

		<SheetPrimitive.Close
			bind:ref={closeRef}
			class="data-[state=open]:bg-secondary focus-visible:ring-ring ring-offset-background absolute top-4 right-4 rounded-sm opacity-75 transition-opacity hover:opacity-100 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none disabled:pointer-events-none"
			aria-label="Close"
		>
			<XIcon
				class="size-4"
				aria-hidden
			/>
		</SheetPrimitive.Close>
	</SheetPrimitive.Content>
</SheetPrimitive.Portal>
