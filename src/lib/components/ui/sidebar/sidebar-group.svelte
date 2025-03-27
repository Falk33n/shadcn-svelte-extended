<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SidebarGroupProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SidebarGroupProps = $props();
</script>

<div
	bind:this={ref}
	data-sidebar="group"
	class={cn('relative flex w-full min-w-0 flex-col p-2', className)}
	{...restProps}
>
	{@render children?.()}
</div>
