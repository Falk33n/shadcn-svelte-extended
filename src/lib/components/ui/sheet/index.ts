import { Dialog as SheetPrimitive } from 'bits-ui';
import SheetContent from './sheet-content.svelte';
import SheetDescription, { type SheetDescriptionProps } from './sheet-description.svelte';
import SheetFooter from './sheet-footer.svelte';
import SheetHeader from './sheet-header.svelte';
import SheetOverlay from './sheet-overlay.svelte';
import SheetTitle from './sheet-title.svelte';
import type { SheetContentProps } from './types';
import { sheetVariants, type SheetSide } from './variants';

const Sheet = SheetPrimitive.Root;
const SheetClose = SheetPrimitive.Close;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;

export {
	SheetClose as Close,
	SheetContent as Content,
	SheetDescription as Description,
	SheetFooter as Footer,
	SheetHeader as Header,
	SheetOverlay as Overlay,
	SheetPortal as Portal,
	Sheet as Root,
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetOverlay,
	SheetPortal,
	SheetTitle,
	SheetTrigger,
	sheetVariants,
	SheetTitle as Title,
	SheetTrigger as Trigger,
	type SheetContentProps as ContentProps,
	type SheetDescriptionProps as DescriptionProps,
	type SheetContentProps,
	type SheetDescriptionProps,
	type SheetSide,
};
