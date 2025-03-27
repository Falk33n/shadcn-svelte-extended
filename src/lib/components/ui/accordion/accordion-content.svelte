<script
	lang="ts"
	module
>
	import {
		Accordion as AccordionPrimitive,
		type WithElementRef,
		type WithoutChild,
	} from 'bits-ui';

	export type AccordionContentProps = WithoutChild<
		WithElementRef<Omit<AccordionPrimitive.ContentProps, 'ref'>, HTMLDivElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: AccordionContentProps = $props();
</script>

<AccordionPrimitive.Content
	bind:ref
	class={cn(
		'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all',
		className,
	)}
	{...restProps}
>
	<div class="pt-0 pb-4">
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>
