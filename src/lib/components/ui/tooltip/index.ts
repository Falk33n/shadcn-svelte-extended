import { Tooltip as TooltipPrimitive } from 'bits-ui';
import TooltipContent, { type TooltipContentProps } from './tooltip-content.svelte';

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

export {
	TooltipContent as Content,
	Tooltip as Root,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipTrigger as Trigger,
	type TooltipContentProps as ContentProps,
	type TooltipContentProps,
};
