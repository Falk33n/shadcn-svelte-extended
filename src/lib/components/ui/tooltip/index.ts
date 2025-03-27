import { Tooltip as TooltipPrimitive } from 'bits-ui';
import TooltipContent, { type TooltipContentProps } from './tooltip-content.svelte';

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipArrow = TooltipPrimitive.Arrow;
const TooltipPortal = TooltipPrimitive.Portal;
const TooltipProvider = TooltipPrimitive.Provider;

export {
	TooltipArrow as Arrow,
	TooltipContent as Content,
	TooltipPortal as Portal,
	TooltipProvider as Provider,
	Tooltip as Root,
	Tooltip,
	TooltipArrow,
	TooltipContent,
	TooltipPortal,
	TooltipProvider,
	TooltipTrigger,
	TooltipTrigger as Trigger,
	type TooltipContentProps as ContentProps,
	type TooltipContentProps,
};
