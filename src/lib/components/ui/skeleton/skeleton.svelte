<script
	lang="ts"
	module
>
	import type { WithElementRef, WithoutChildren } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	export type SkeletonProps = WithoutChildren<
		WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className, ref = $bindable(null), ...restProps }: SkeletonProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('bg-muted animate-pulse rounded-md', className)}
	aria-hidden={true}
	{...restProps}
></div>
