<script
	lang="ts"
	module
>
	import {
		AlertDialog as AlertDialogPrimitive,
		type WithElementRef,
		type WithoutChild,
	} from 'bits-ui';

	type AlertDialogContentBaseProps = {
		/**
		 * @description
		 * The props used for the alert dialog portal component.
		 * See https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/utilities/portal/types.ts
		 * for reference.
		 */
		portalProps?: AlertDialogPrimitive.PortalProps;
	};

	export type AlertDialogContentProps = AlertDialogContentBaseProps &
		WithoutChild<
			WithElementRef<Omit<AlertDialogPrimitive.ContentProps, 'ref'>, HTMLDivElement>
		>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import AlertDialogOverlay from './alert-dialog-overlay.svelte';

	let {
		children,
		class: className,
		ref = $bindable(null),
		portalProps,
		...restProps
	}: AlertDialogContentProps = $props();
</script>

<AlertDialogPrimitive.Portal {...portalProps}>
	<AlertDialogOverlay />
	<AlertDialogPrimitive.Content
		bind:ref
		class={cn(
			'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg',
			className,
		)}
		{...restProps}
	>
		{@render children?.()}
	</AlertDialogPrimitive.Content>
</AlertDialogPrimitive.Portal>
