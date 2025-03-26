<script
	lang="ts"
	module
>
	import { Dialog as SheetPrimitive, type WithElementRef, type WithoutChild } from 'bits-ui';

	export type SheetDescriptionProps = WithoutChild<
		WithElementRef<Omit<SheetPrimitive.DescriptionProps, 'ref'>, HTMLDivElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SheetDescriptionProps = $props();
</script>

<SheetPrimitive.Description
	bind:ref
	class={cn('text-muted-foreground text-sm', className)}
	{...restProps}
>
	{@render children?.()}
</SheetPrimitive.Description>
