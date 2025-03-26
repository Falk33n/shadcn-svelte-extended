<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SkeletonProps } from './types';

	let { ref = $bindable(null), class: className, ...restProps }: SkeletonProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('bg-muted animate-pulse rounded-md', className)}
	aria-hidden="true"
	{...restProps}
></div>
