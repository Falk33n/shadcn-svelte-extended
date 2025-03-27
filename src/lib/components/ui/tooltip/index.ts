import {
	Tooltip as TooltipPrimitive,
	type TooltipArrowProps,
	type TooltipPortalProps,
	type TooltipRootProps as TooltipProps,
	type TooltipProviderProps,
	type TooltipTriggerProps,
} from 'bits-ui';
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
	type TooltipArrowProps as ArrowProps,
	type TooltipContentProps as ContentProps,
	type TooltipPortalProps as PortalProps,
	type TooltipProviderProps as ProviderProps,
	type TooltipProps as RootProps,
	type TooltipArrowProps,
	type TooltipContentProps,
	type TooltipPortalProps,
	type TooltipProps,
	type TooltipProviderProps,
	type TooltipTriggerProps,
	type TooltipTriggerProps as TriggerProps,
};
