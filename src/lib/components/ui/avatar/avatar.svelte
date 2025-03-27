<script
	lang="ts"
	module
>
	import { Avatar as AvatarPrimitive, type WithElementRef, type WithoutChild } from 'bits-ui';

	export type AvatarProps = WithoutChild<
		WithElementRef<Omit<AvatarPrimitive.RootProps, 'ref'>, HTMLDivElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let { children, class: className, ref = $bindable(null), ...restProps }: AvatarProps = $props();
</script>

<AvatarPrimitive.Root
	bind:ref
	class={cn('relative flex size-10 shrink-0 overflow-hidden rounded-full', className)}
	{...restProps}
>
	{@render children?.()}
</AvatarPrimitive.Root>
