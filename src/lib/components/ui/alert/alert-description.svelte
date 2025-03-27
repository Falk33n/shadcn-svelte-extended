<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type AlertDescriptionProps = WithElementRef<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: AlertDescriptionProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('text-sm [&_p]:leading-relaxed', className)}
	{...restProps}
>
	{@render children?.()}
</div>
