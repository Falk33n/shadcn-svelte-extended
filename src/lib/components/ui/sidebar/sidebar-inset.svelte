<script
	lang="ts"
	module
>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SidebarInsetProps = WithElementRef<HTMLAttributes<HTMLElement>>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: SidebarInsetProps = $props();
</script>

<main
	bind:this={ref}
	class={cn(
		'bg-background relative flex min-h-svh flex-1 flex-col',
		'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</main>
