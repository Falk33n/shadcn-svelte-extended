<script
	lang="ts"
	module
>
	import { Dialog as SheetPrimitive, type WithElementRef, type WithoutChild } from 'bits-ui';

	export type SheetTitleProps = WithoutChild<
		WithElementRef<Omit<SheetPrimitive.TitleProps, 'ref'>, HTMLDivElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SheetTitleProps = $props();
</script>

<SheetPrimitive.Title
	bind:ref
	class={cn('text-foreground text-lg font-semibold', className)}
	{...restProps}
>
	{@render children?.()}
</SheetPrimitive.Title>
