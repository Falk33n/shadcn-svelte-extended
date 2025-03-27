<script
	lang="ts"
	module
>
	import {
		AlertDialog as AlertDialogPrimitive,
		type WithElementRef,
		type WithoutChild,
	} from 'bits-ui';

	export type AlertDialogTitleProps = WithoutChild<
		WithElementRef<Omit<AlertDialogPrimitive.TitleProps, 'ref'>, HTMLDivElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		level = 3,
		ref = $bindable(null),
		...restProps
	}: AlertDialogTitleProps = $props();
</script>

<AlertDialogPrimitive.Title
	bind:ref
	class={cn('text-lg font-semibold', className)}
	{level}
	{...restProps}
>
	{@render children?.()}
</AlertDialogPrimitive.Title>
