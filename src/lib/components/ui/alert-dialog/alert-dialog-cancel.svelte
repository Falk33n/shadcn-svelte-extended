<script
	lang="ts"
	module
>
	import { AlertDialog as AlertDialogPrimitive, type WithElementRef } from 'bits-ui';

	export type AlertDialogCancelProps = WithElementRef<
		Omit<AlertDialogPrimitive.CancelProps, 'ref'>,
		HTMLButtonElement
	>;
</script>

<script lang="ts">
	import { addRippleEffect, cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { buttonVariants } from '../button';

	let {
		children,
		child,
		class: className,
		ref = $bindable(null),
		...restProps
	}: AlertDialogCancelProps = $props();

	const cancelProps = $derived({
		class: cn(buttonVariants({ variant: 'outlined' }), className),
		...restProps,
	});

	onMount(() => {
		if (!ref) return;
		// This will make an ripple animation appear each time interaction happens.
		addRippleEffect(ref);
	});
</script>

{#if child}
	{@render child({ props: { ref, ...cancelProps } })}
{:else}
	<AlertDialogPrimitive.Cancel
		bind:ref
		{...cancelProps}
	>
		{@render children?.()}
	</AlertDialogPrimitive.Cancel>
{/if}
