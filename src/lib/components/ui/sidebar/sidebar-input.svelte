<script
	lang="ts"
	module
>
	import { Input, type InputProps } from '../input';

	export type SidebarInputProps = InputProps;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		class: className,
		value = $bindable(''),
		ref = $bindable(null),
		...restProps
	}: SidebarInputProps = $props();
</script>

<Input
	bind:ref
	bind:value
	data-sidebar="input"
	class={cn('bg-background focus-visible:ring-sidebar-ring h-8 w-full shadow-none', className)}
	{...restProps}
/>
