<script
	lang="ts"
	module
>
	import { AlertDialog as AlertDialogPrimitive, type WithElementRef } from 'bits-ui';

	export type AlertDialogActionProps = WithElementRef<
		Omit<AlertDialogPrimitive.ActionProps, 'ref'>,
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
	}: AlertDialogActionProps = $props();

	const actionProps = $derived({ class: cn(buttonVariants(), className), ...restProps });

	onMount(() => {
		if (!ref) return;
		// This will make an ripple animation appear each time interaction happens.
		addRippleEffect(ref);
	});
</script>

{#if child}
	{@render child({ props: { ref, ...actionProps } })}
{:else}
	<AlertDialogPrimitive.Action
		bind:ref
		{...actionProps}
	>
		{@render children?.()}
	</AlertDialogPrimitive.Action>
{/if}
