import {
	Accordion as AccordionPrimitive,
	type AccordionRootProps as AccordionProps,
} from 'bits-ui';
import AccordionContent, { type AccordionContentProps } from './accordion-content.svelte';
import AccordionItem, { type AccordionItemProps } from './accordion-item.svelte';
import AccordionTrigger, { type AccordionTriggerProps } from './accordion-trigger.svelte';

const Accordion = AccordionPrimitive.Root;

export {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	AccordionContent as Content,
	AccordionItem as Item,
	Accordion as Root,
	AccordionTrigger as Trigger,
	type AccordionContentProps,
	type AccordionItemProps,
	type AccordionProps,
	type AccordionTriggerProps,
	type AccordionContentProps as ContentProps,
	type AccordionItemProps as ItemProps,
	type AccordionProps as RootProps,
	type AccordionTriggerProps as TriggerProps,
};
