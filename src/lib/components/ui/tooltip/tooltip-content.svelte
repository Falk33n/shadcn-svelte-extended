<script
	lang="ts"
	module
>
	import { Tooltip as TooltipPrimitive, type WithElementRef, type WithoutChild } from 'bits-ui';

	export type TooltipContentProps = WithoutChild<
		WithElementRef<Omit<TooltipPrimitive.ContentProps, 'ref'>, HTMLDivElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		sideOffset = 10,
		ref = $bindable(null),
		...restProps
	}: TooltipContentProps = $props();
</script>

<TooltipPrimitive.Content
	bind:ref
	{sideOffset}
	class={cn(
		'bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</TooltipPrimitive.Content>
