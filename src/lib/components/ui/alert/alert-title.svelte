<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type AlertTitleBaseProps = {
		/**
		 * @description The level of the heading element to be used.
		 *
		 * @defaultValue `"h5"`
		 */
		level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	};

	export type AlertTitleProps = AlertTitleBaseProps &
		WithElementRef<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		level = 'h5',
		ref = $bindable(null),
		...restProps
	}: AlertTitleProps = $props();
</script>

<svelte:element
	this={level}
	bind:this={ref}
	class={cn('mb-1 leading-none font-medium tracking-tight', className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
