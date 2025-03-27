<script
	lang="ts"
	module
>
	import {
		AlertDialog as AlertDialogPrimitive,
		type WithElementRef,
		type WithoutChild,
	} from 'bits-ui';

	export type AlertDialogDescriptionProps = WithoutChild<
		WithElementRef<Omit<AlertDialogPrimitive.DescriptionProps, 'ref'>, HTMLDivElement>
	>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...restProps
	}: AlertDialogDescriptionProps = $props();
</script>

<AlertDialogPrimitive.Description
	bind:ref
	class={cn('text-muted-foreground text-sm', className)}
	{...restProps}
>
	{@render children?.()}
</AlertDialogPrimitive.Description>
