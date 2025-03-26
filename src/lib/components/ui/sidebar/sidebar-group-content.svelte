<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SidebarGroupContentProps = WithElementRef<
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
	}: SidebarGroupContentProps = $props();
</script>

<div
	bind:this={ref}
	data-sidebar="group-content"
	class={cn('w-full text-sm', className)}
	{...restProps}
>
	{@render children?.()}
</div>
