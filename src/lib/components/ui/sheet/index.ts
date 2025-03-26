import { Dialog as SheetPrimitive } from 'bits-ui';
import SheetContent from './sheet-content.svelte';
import SheetDescription, { type SheetDescriptionProps } from './sheet-description.svelte';
import SheetFooter, { type SheetFooterProps } from './sheet-footer.svelte';
import SheetHeader, { type SheetHeaderProps } from './sheet-header.svelte';
import SheetOverlay, { type SheetOverlayProps } from './sheet-overlay.svelte';
import SheetTitle, { type SheetTitleProps } from './sheet-title.svelte';
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
	type SheetFooterProps as FooterProps,
	type SheetHeaderProps as HeaderProps,
	type SheetOverlayProps as OverlayProps,
	type SheetContentProps,
	type SheetDescriptionProps,
	type SheetFooterProps,
	type SheetHeaderProps,
	type SheetOverlayProps,
	type SheetSide,
	type SheetTitleProps,
	type SheetTitleProps as TitleProps,
};
