<script lang="ts">
	import { cn } from '$lib/utils';
	import XIcon from '@lucide/svelte/icons/x';
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import SheetOverlay from './sheet-overlay.svelte';
	import type { SheetContentProps } from './types';
	import { sheetVariants } from './variants';

	let {
		children,
		class: className,
		side = 'right',
		ref = $bindable(null),
		portalProps,
		...restProps
	}: SheetContentProps = $props();
</script>

<SheetPrimitive.Portal {...portalProps}>
	<SheetOverlay />
	<SheetPrimitive.Content
		bind:ref
		class={cn(sheetVariants({ side }), className)}
		{...restProps}
	>
		{@render children?.()}

		<SheetPrimitive.Close
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
