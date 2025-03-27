<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import { onMount, type Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type SidebarGroupActionBaseProps = {
		/**
		 * @description
		 * Adds the `child` prop to the component, which allows the
		 * user to use their own element or component with the
		 * same functionality as the current component.
		 */
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	};

	export type SidebarGroupActionProps = SidebarGroupActionBaseProps &
		WithElementRef<HTMLButtonAttributes, HTMLButtonElement>;
</script>

<script lang="ts">
	import { addRippleEffect, cn } from '$lib/utils';

	let {
		children,
		child,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SidebarGroupActionProps = $props();

	const groupActionProps = $derived({
		'class': cn(
			'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform duration-200 outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
			// Increases the hit area of the button on mobile.
			'after:absolute after:-inset-2 after:md:hidden',
			'group-data-[collapsible=icon]:hidden',
			className,
		),
		'data-sidebar': 'group-action',
		...restProps,
	});

	onMount(() => {
		if (!ref) return;
		// This will make an ripple animation appear each time interaction happens.
		addRippleEffect(ref);
	});
</script>

{#if child}
	{@render child({ props: { ref, ...groupActionProps } })}
{:else}
	<button
		bind:this={ref}
		{...groupActionProps}
	>
		{@render children?.()}
	</button>
{/if}
