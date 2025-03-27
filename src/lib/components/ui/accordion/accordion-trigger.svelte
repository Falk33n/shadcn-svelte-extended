<script
	lang="ts"
	module
>
	import {
		Accordion as AccordionPrimitive,
		type WithElementRef,
		type WithoutChild,
	} from 'bits-ui';

	type AccordionTriggerBaseProps = {
		/**
		 * @description The aria level of the header component
		 *
		 * @defaultValue 3
		 */
		level?: AccordionPrimitive.HeaderProps['level'];
	};

	export type AccordionTriggerProps = AccordionTriggerBaseProps &
		WithoutChild<
			WithElementRef<Omit<AccordionPrimitive.TriggerProps, 'ref'>, HTMLButtonElement>
		>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';

	let {
		children,
		class: className,
		level = 3,
		ref = $bindable(null),
		...restProps
	}: AccordionTriggerProps = $props();
</script>

<AccordionPrimitive.Header
	{level}
	class="flex"
>
	<AccordionPrimitive.Trigger
		bind:ref
		class={cn(
			'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
			className,
		)}
		{...restProps}
	>
		{@render children?.()}

		<ChevronDownIcon
			class="size-4 shrink-0 transition-transform duration-200"
			aria-hidden
		/>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
