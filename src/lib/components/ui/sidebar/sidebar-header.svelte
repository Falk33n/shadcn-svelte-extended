<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SidebarHeaderProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SidebarHeaderProps = $props();
</script>

<div
	bind:this={ref}
	data-sidebar="header"
	class={cn('flex flex-col gap-2 p-2', className)}
	{...restProps}
>
	{@render children?.()}
</div>
