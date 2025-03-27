<script
	lang="ts"
	module
>
	import type { Snippet } from 'svelte';
	import { Button, type ButtonProps } from '../button';

	type ButtonMouseEvent = MouseEvent & {
		currentTarget: EventTarget & HTMLButtonElement;
	};

	type SidebarTriggerBaseProps = {
		/**
		 * @description
		 * Adds the `child` prop to the component, which allows the
		 * user to use their own element or component with the
		 * same functionality as the current component.
		 */
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	};

	export type SidebarTriggerProps = SidebarTriggerBaseProps &
		// @ts-expect-error // Too complex union type.
		WithoutChildren<WithElementRef<Omit<ButtonProps, 'ref'>, HTMLButtonElement>>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import PanelLeftIcon from '@lucide/svelte/icons/panel-left';
	import type { WithElementRef, WithoutChildren } from 'bits-ui';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { useSidebar } from './context.svelte';

	let {
		child,
		onclick,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SidebarTriggerProps = $props();

	const sidebar = useSidebar();

	const triggerProps = $derived({
		'class': cn('size-7', className),
		'type': 'button',
		'onclick': (e: ButtonMouseEvent) => {
			onclick?.(e as any);
			sidebar.toggle();
		},
		'data-sidebar': 'trigger',
		'variant': 'ghost',
		'size': 'icon',
		'aria-label': 'Toggle Sidebar',
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: { ref, ...triggerProps } })}
{:else}
	<!-- 
        The `as HTMLButtonAttributes` is needed to bypass the too complex union type since 
        the `Button` component can also be an anchor element. 
    -->
	<Button
		bind:ref
		{...triggerProps as HTMLButtonAttributes}
	>
		<PanelLeftIcon aria-hidden />
	</Button>
{/if}
