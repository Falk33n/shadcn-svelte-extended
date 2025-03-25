<script lang="ts">
	import { addRippleEffect, cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonProps } from './types';
	import { buttonVariants } from './variants';

	let {
		children,
		href,
		class: className,
		variant = 'primary',
		size = 'md',
		// Cast 'button' to HTMLButtonAttributes['type'] to ensure compatibility with possible
		// undefined or valid type values.
		type = 'button' as HTMLButtonAttributes['type'],
		ref = $bindable(null),
		...restProps
	}: ButtonProps = $props();

	// Prevent both `type` and `href` from being defined simultaneously.
	// This ensures the element behaves correctly as either a <button> or an <a>.
	type = href ? undefined : type;
	href = type ? undefined : href;

	const buttonClasses = cn(buttonVariants({ variant, size }), className);

	onMount(() => {
		if (!ref) return;
		// Adds `onkeydown`, `onclick` and `onfocus` events to the button making it
		// create a ripple animation when the user interacts with the button.
		addRippleEffect(ref);
	});
</script>

{#if href}
	<!-- Cast `...restProps` to HTMLAnchorAttributes to ensure compatibility with the anchor element. -->
	<a
		bind:this={ref}
		class={buttonClasses}
		{href}
		{...restProps as HTMLAnchorAttributes}
	>
		{@render children?.()}
	</a>
{:else}
	<!-- Cast `...restProps` to HTMLButtonAttributes to ensure compatibility with the button element. -->
	<button
		bind:this={ref}
		class={buttonClasses}
		{type}
		{...restProps as HTMLButtonAttributes}
	>
		{@render children?.()}
	</button>
{/if}
