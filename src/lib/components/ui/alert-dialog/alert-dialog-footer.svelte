<script
	lang="ts"
	module
>
	import { type WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type AlertDialogFooterProps = WithElementRef<
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
	}: AlertDialogFooterProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
	{...restProps}
>
	{@render children?.()}
</div>
