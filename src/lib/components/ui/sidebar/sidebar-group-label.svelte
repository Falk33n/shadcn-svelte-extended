<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type SidebarGroupLabelBaseProps = {
		/**
		 * @description
		 * Adds the `child` prop to the component, which allows the
		 * user to use their own element or component with the
		 * same functionality as the current component.
		 */
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	};

	export type SidebarGroupLabelProps = SidebarGroupLabelBaseProps &
		WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		child,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SidebarGroupLabelProps = $props();

	const groupLabelProps = $derived({
		'class': cn(
			'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear outline-none focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
			'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
			className,
		),
		'data-sidebar': 'group-label',
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: { ref, ...groupLabelProps } })}
{:else}
	<div
		bind:this={ref}
		{...groupLabelProps}
	>
		{@render children?.()}
	</div>
{/if}
