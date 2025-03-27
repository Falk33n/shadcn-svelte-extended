<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLLiAttributes } from 'svelte/elements';

	export type SidebarMenuSubItemProps = WithElementRef<HTMLLiAttributes, HTMLLIElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SidebarMenuSubItemProps = $props();
</script>

<li
	bind:this={ref}
	class={className ? cn(className) : undefined}
	data-sidebar="menu-sub-item"
	{...restProps}
>
	{@render children?.()}
</li>
