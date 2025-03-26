<script lang="ts">
	import { cn } from '$lib/utils';
	import type { InputProps } from './types';

	let {
		type,
		class: className,
		value = $bindable(),
		files = $bindable(),
		ref = $bindable(null),
		...restProps
	}: InputProps = $props();

	files = type !== 'file' ? undefined : files;

	const inputClasses = cn(
		'border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-offset-background flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-75 md:text-sm',
		className,
	);
</script>

{#if type === 'file'}
	<input
		bind:this={ref}
		class={inputClasses}
		type="file"
		bind:files
		bind:value
		{...restProps}
	/>
{:else}
	<input
		bind:this={ref}
		class={inputClasses}
		{type}
		bind:value
		{...restProps}
	/>
{/if}
