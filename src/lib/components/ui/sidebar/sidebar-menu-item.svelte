<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLLiAttributes } from 'svelte/elements';

	export type SidebarMenuItemProps = WithElementRef<HTMLLiAttributes, HTMLLIElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SidebarMenuItemProps = $props();
</script>

<li
	bind:this={ref}
	data-sidebar="menu-item"
	class={cn('group/menu-item relative', className)}
	{...restProps}
>
	{@render children?.()}
</li>
