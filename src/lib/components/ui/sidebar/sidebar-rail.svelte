<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export type SidebarRailProps = WithElementRef<HTMLButtonAttributes, HTMLButtonElement>;
</script>

<script lang="ts">
	import { addRippleEffect, cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { useSidebar } from './context.svelte';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SidebarRailProps = $props();

	const sidebar = useSidebar();

	onMount(() => {
		if (!ref) return;
		// This will make an ripple animation appear each time interaction happens.
		addRippleEffect(ref);
	});
</script>

<button
	bind:this={ref}
	data-sidebar="rail"
	aria-label="Toggle Sidebar"
	tabIndex={-1}
	onclick={() => sidebar.toggle()}
	title="Toggle Sidebar"
	class={cn(
		'hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all duration-200 ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex',
		'[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
		'[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
		'group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full',
		'[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
		'[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</button>
