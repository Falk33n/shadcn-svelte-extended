<script
	lang="ts"
	module
>
	import { Avatar as AvatarPrimitive, type WithElementRef, type WithoutChild } from 'bits-ui';

	export type AvatarFallbackProps = WithoutChild<
		WithElementRef<Omit<AvatarPrimitive.FallbackProps, 'ref'>, HTMLSpanElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: AvatarFallbackProps = $props();
</script>

<AvatarPrimitive.Fallback
	bind:ref
	class={cn('bg-muted flex size-full items-center justify-center', className)}
	{...restProps}
>
	{@render children?.()}
</AvatarPrimitive.Fallback>
