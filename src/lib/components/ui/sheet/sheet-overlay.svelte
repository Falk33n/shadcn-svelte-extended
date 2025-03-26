<script
	lang="ts"
	module
>
	import {
		Dialog as SheetPrimitive,
		type WithChildren,
		type WithElementRef,
		type WithoutChildrenOrChild,
	} from 'bits-ui';

	export type SheetOverlayProps = WithChildren<
		WithoutChildrenOrChild<
			WithElementRef<Omit<SheetPrimitive.OverlayProps, 'ref'>, HTMLDivElement>
		>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SheetOverlayProps = $props();
</script>

<SheetPrimitive.Overlay
	bind:ref
	class={cn(
		'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</SheetPrimitive.Overlay>
