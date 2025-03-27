<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type SidebarProviderBaseProps = {
		/**
		 * @description Controls whether the sidebar is open.

         * @defaultValue true
		 */
		open?: boolean;

		/**
		 * @description Callback invoked when the open state changes.

         * @param open - The new open state of the sidebar.
		 */

		onOpenChange?: (open: boolean) => void;
	};

	export type SidebarProviderProps = SidebarProviderBaseProps &
		WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from './constants';
	import { setSidebar } from './context.svelte';

	let {
		children,
		onOpenChange,
		style,
		class: className,
		open = $bindable(true),
		ref = $bindable(null),
		...restProps
	}: SidebarProviderProps = $props();

	const sidebar = setSidebar({
		open: () => open,
		setOpen: (value: boolean) => {
			open = value;
			onOpenChange?.(value);
		},
	});
</script>

<svelte:window onkeydown={sidebar.handleShortcutKeydown} />

<div
	bind:this={ref}
	style={`--sidebar-width: ${SIDEBAR_WIDTH}; --sidebar-width-icon: ${SIDEBAR_WIDTH_ICON}; ${style}`}
	class={cn(
		'group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</div>
