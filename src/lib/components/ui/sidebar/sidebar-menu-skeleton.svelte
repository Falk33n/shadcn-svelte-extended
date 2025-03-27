<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type SidebarMenuSkeletonBaseProps = {
		/**
		 * @description Boolean to render an icon skeleton or not.
		 *
		 * @defaultValue false
		 */
		showIcon?: boolean;
	};

	export type SidebarMenuSkeletonProps = SidebarMenuSkeletonBaseProps &
		WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import { Skeleton } from '../skeleton';

	let {
		children,
		class: className,
		showIcon = false,
		ref = $bindable(null),
		...restProps
	}: SidebarMenuSkeletonProps = $props();

	/** @description Random width between 50% and 90% */
	const width = `${Math.floor(Math.random() * 40) + 50}%`;
</script>

<div
	bind:this={ref}
	data-sidebar="menu-skeleton"
	class={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
	aria-hidden={true}
	{...restProps}
>
	{#if showIcon}
		<Skeleton
			class="size-4 rounded-md"
			data-sidebar="menu-skeleton-icon"
		/>
	{/if}

	<Skeleton
		class="h-4 max-w-[var(--skeleton-width)] flex-1"
		data-sidebar="menu-skeleton-text"
		style="--skeleton-width: {width};"
	/>

	{@render children?.()}
</div>
