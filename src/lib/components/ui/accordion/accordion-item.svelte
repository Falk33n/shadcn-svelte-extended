<script
	lang="ts"
	module
>
	import {
		Accordion as AccordionPrimitive,
		type WithElementRef,
		type WithoutChild,
	} from 'bits-ui';

	export type AccordionItemProps = WithoutChild<
		WithElementRef<Omit<AccordionPrimitive.ItemProps, 'ref'>, HTMLDivElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: AccordionItemProps = $props();
</script>

<AccordionPrimitive.Item
	bind:ref
	class={cn('border-b', className)}
	{...restProps}
>
	{@render children?.()}
</AccordionPrimitive.Item>
