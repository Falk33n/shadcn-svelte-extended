<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SidebarMenuSubProps = WithElementRef<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SidebarMenuSubProps = $props();
</script>

<ul
	bind:this={ref}
	data-sidebar="menu-sub"
	class={cn(
		'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
		'group-data-[collapsible=icon]:hidden',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</ul>
