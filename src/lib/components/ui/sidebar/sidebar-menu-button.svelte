<script
	lang="ts"
	module
>
	import { mergeProps, type WithElementRef, type WithoutChildren } from 'bits-ui';
	import { onMount, type Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';
	import * as Tooltip from '../tooltip';

	//
	// VARIANTS
	//

	/**
	 * @description
	 * Applies different styles to the button using `tailwind-variants` based on
	 * the chosen `variant` and `size` props.
	 *
	 * @property `variant`: Defines the color style of the button.
	 * @defaultValue `"accent"`
	 *
	 * @property `size`: Defines the size of the button.
	 * @defaultValue `"md"`
	 */
	export const sidebarMenuButtonVariants = tv({
		base: 'peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm transition-[width,height,padding] duration-200 outline-none group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
		variants: {
			variant: {
				accent: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
				outlined:
					'bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
			},
			size: {
				sm: 'h-7 text-xs',
				md: 'h-8 text-sm',
				lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0',
			},
		},
		defaultVariants: {
			variant: 'accent',
			size: 'md',
		},
	});

	export type SidebarMenuButtonVariant = VariantProps<
		typeof sidebarMenuButtonVariants
	>['variant'];

	export type SidebarMenuButtonSize = VariantProps<typeof sidebarMenuButtonVariants>['size'];

	//
	// TYPES
	//

	type SidebarMenuButtonBaseProps = {
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
		 *
		 * @defaultValue false
		 */
		isActive?: boolean;

		/**
		 * @description Applies color styles to the button.
		 *
		 * @defaultValue `"accent"`
		 */
		variant?: SidebarMenuButtonVariant;

		/**
		 * @description Applies size styles to the button.
		 *
		 * @defaultValue `"md"`
		 */
		size?: SidebarMenuButtonSize;

		/**
		 * @description
		 * Adds the `tooltipContent` prop to the component, which is the same
		 * as an regular `children` prop but used for the tooltip content children.
		 */
		tooltipContent?: Snippet;

		/**
		 * @description
		 * The props used for the tooltip content component.
		 * See "./src/lib/ui/tooltip/tooltip-content.svelte"
		 * for reference.
		 */
		tooltipContentProps?: WithoutChildren<Tooltip.TooltipContentProps>;

		/**
		 * @description
		 * Adds the `child` prop to the component, which allows the
		 * user to use their own element or component with the
		 * same functionality as the current component.
		 */
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	};

	export type SidebarMenuButtonProps = SidebarMenuButtonBaseProps &
		WithElementRef<HTMLButtonAttributes, HTMLButtonElement>;
</script>

<script lang="ts">
	import { addRippleEffect, cn } from '$lib/utils';
	import { useSidebar } from './context.svelte';

	let {
		children,
		child,
		tooltipContent,
		class: className,
		variant = 'accent',
		size = 'md',
		isActive = false,
		ref = $bindable(null),
		tooltipContentProps,
		...restProps
	}: SidebarMenuButtonProps = $props();

	const sidebar = useSidebar();

	const buttonProps = $derived({
		'class': cn(sidebarMenuButtonVariants({ variant, size }), className),
		'data-sidebar': 'menu-button',
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

<!-- Reusable snippet to conditionally render the button as is or as the tooltip trigger. -->
{#snippet Button({ props }: { props?: Record<string, unknown> })}
	{@const mergedProps = mergeProps(buttonProps, props)}

	{#if child}
		{@render child({ props: { ref, ...mergedProps } })}
	{:else}
		<button
			bind:this={ref}
			{...mergedProps}
		>
			{@render children?.()}
		</button>
	{/if}
{/snippet}

{#if !tooltipContent}
	{@render Button({})}
{:else}
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				{@render Button({ props })}
			{/snippet}
		</Tooltip.Trigger>

		<Tooltip.Portal>
			<Tooltip.Content
				side="right"
				align="center"
				hidden={sidebar.state !== 'collapsed' || sidebar.isMobile}
				{...tooltipContentProps}
			>
				<Tooltip.Arrow aria-hidden />

				{@render tooltipContent()}
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
{/if}
