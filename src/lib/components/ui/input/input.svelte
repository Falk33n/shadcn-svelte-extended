<script
	lang="ts"
	module
>
	import type { WithElementRef, WithoutChildren } from 'bits-ui';
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';

	//
	// FILE PROPS
	//

	type ExcludeInputTypeFile = Exclude<HTMLInputTypeAttribute, 'file'>;

	type InputWithoutTypeFileProps = {
		/** @description Any input `type` other than `"file"`. */
		type?: ExcludeInputTypeFile;

		/** @description The `files` prop is disallowed unless `type` is `"file"`. */
		files?: never;
	};

	type InputWithTypeFileProps = {
		/** @description The input `type` is required to be `"file"` when binding the `files` prop. */
		type: 'file';

		/** @description Allows binding a `FileList` when the input `type` is `"file"`. */
		files?: FileList;
	};

	//
	// INPUT PROPS
	//

	type InputBaseProps = WithoutChildren<
		WithElementRef<Omit<HTMLInputAttributes, 'type'>, HTMLInputElement>
	>;

	export type InputProps = InputBaseProps & (InputWithoutTypeFileProps | InputWithTypeFileProps);
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		type,
		class: className,
		value = $bindable(),
		files = $bindable(),
		ref = $bindable(null),
		...restProps
	}: InputProps = $props();

	const inputClasses = cn(
		'border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-offset-background flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-75 md:text-sm',
		className,
	);
</script>

{#if type === 'file'}
	<input
		bind:this={ref}
		bind:files
		bind:value
		class={inputClasses}
		type="file"
		{...restProps}
	/>
{:else}
	<input
		bind:this={ref}
		bind:value
		class={inputClasses}
		{type}
		{...restProps}
	/>
{/if}
