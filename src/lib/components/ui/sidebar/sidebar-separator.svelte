<script
	lang="ts"
	module
>
	import { Separator, type SeparatorProps } from '../separator';

	export type SidebarSeparatorProps = SeparatorProps;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className, ref = $bindable(null), ...restProps }: SidebarSeparatorProps = $props();
</script>

<Separator
	bind:ref
	data-sidebar="separator"
	class={cn('bg-sidebar-border mx-2 w-auto', className)}
	{...restProps}
/>
