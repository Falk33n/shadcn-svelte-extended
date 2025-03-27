<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import { onMount, type Snippet } from 'svelte';

	type SidebarMenuSubButtonBaseProps = {
		/**
		 * @description
		 * Controls whether the button appears in its "active" visual state.
		 * This does not track real-time user interaction like a mouse press.
		 *
		 * It is useful for indicating that the button represents the currently
		 * active or selected item in a menu or navigation list.
		 *
		 * When `true`, it applies active styles to the button, such as different
		 * background or font weight.
		 */
		isActive?: boolean;

		/**
		 * @description Applies size styles to the button.
		 *
		 * @defaultValue `"md"`
		 */
		size?: 'sm' | 'md';

		/**
		 * @description
		 * Adds the `child` prop to the component, which allows the
		 * user to use their own element or component with the
		 * same functionality as the current component.
		 */
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	};

	export type SidebarMenuSubButtonProps = SidebarMenuSubButtonBaseProps &
		WithElementRef<HTMLAnchorAttributes, HTMLAnchorElement>;
</script>

<script lang="ts">
	import { addRippleEffect, cn } from '$lib/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let {
		children,
		child,
		isActive,
		class: className,
		size = 'md',
		ref = $bindable(null),
		...restProps
	}: SidebarMenuSubButtonProps = $props();

	const subButtonProps = $derived({
		'class': cn(
			'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
			'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
			size === 'sm' && 'text-xs',
			size === 'md' && 'text-sm',
			'group-data-[collapsible=icon]:hidden',
			className,
		),
		'data-sidebar': 'menu-sub-button',
		'data-size': size,
		'data-active': isActive,
		...restProps,
	});

	onMount(() => {
		if (!ref) return;
		// This will make an ripple animation appear each time interaction happens.
		addRippleEffect(ref);
	});
</script>

{#if child}
	{@render child({ props: { ref, ...subButtonProps } })}
{:else}
	<a
		bind:this={ref}
		{...subButtonProps}
	>
		{@render children?.()}
	</a>
{/if}
