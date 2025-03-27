<script
	lang="ts"
	module
>
	import { Avatar as AvatarPrimitive, type WithElementRef, type WithoutChildren } from 'bits-ui';

	export type AvatarImageProps = WithoutChildren<
		WithElementRef<Omit<AvatarPrimitive.ImageProps, 'ref'>, HTMLImageElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		child,
		class: className,
		ref = $bindable(null),
		...restProps
	}: AvatarImageProps = $props();

	const imageProps = $derived({
		class: cn('aspect-square size-full', className),
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: { ref, ...imageProps } })}
{:else}
	<AvatarPrimitive.Image
		bind:ref
		{...imageProps}
	/>
{/if}
