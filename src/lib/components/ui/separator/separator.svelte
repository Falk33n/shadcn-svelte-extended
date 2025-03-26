<script
	lang="ts"
	module
>
	import {
		Separator as SeparatorPrimitive,
		type WithElementRef,
		type WithoutChildrenOrChild,
	} from 'bits-ui';

	export type SeparatorProps = WithoutChildrenOrChild<
		WithElementRef<Omit<SeparatorPrimitive.RootProps, 'ref'>, HTMLDivElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		class: className,
		orientation = 'horizontal',
		ref = $bindable(null),
		...restProps
	}: SeparatorProps = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'bg-border shrink-0',
		orientation === 'horizontal' ? 'h-[1px] w-full' : 'min-h-full w-[1px]',
		className,
	)}
	aria-hidden={true}
	{...restProps}
></div>
