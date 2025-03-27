<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import { onMount, type Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type SidebarMenuActionBaseProps = {
		/**
		 * @description
		 * If set to `true`, the menu action button will remain hidden by default
		 * and only become visible when the parent menu item is hovered or focused.
		 *
		 * On mobile, the button will remain visible regardless of this setting.
		 *
		 * @defaultValue false
		 */
		showOnHover?: boolean;

		/**
		 * @description
		 * Adds the `child` prop to the component, which allows the
		 * user to use their own element or component with the
		 * same functionality as the current component.
		 */
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	};

	export type SidebarMenuActionProps = SidebarMenuActionBaseProps &
		WithElementRef<HTMLButtonAttributes, HTMLButtonElement>;
</script>

<script lang="ts">
	import { addRippleEffect, cn } from '$lib/utils';

	let {
		children,
		child,
		class: className,
		showOnHover = false,
		ref = $bindable(null),
		...restProps
	}: SidebarMenuActionProps = $props();

	const menuActionProps = $derived({
		'class': cn(
			'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform duration-200 outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
			// Increases the hit area of the button on mobile.
			'after:absolute after:-inset-2 after:md:hidden',
			'peer-data-[size=sm]/menu-button:top-1',
			'peer-data-[size=default]/menu-button:top-1.5',
			'peer-data-[size=lg]/menu-button:top-2.5',
			'group-data-[collapsible=icon]:hidden',
			showOnHover &&
				'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
			className,
		),
		'data-sidebar': 'menu-action',
		...restProps,
	});

	onMount(() => {
		if (!ref) return;
		// This will make an ripple animation appear each time interaction happens.
		addRippleEffect(ref);
	});
</script>

{#if child}
	{@render child({ props: { ref, ...menuActionProps } })}
{:else}
	<button
		bind:this={ref}
		{...menuActionProps}
	>
		{@render children?.()}
	</button>
{/if}
