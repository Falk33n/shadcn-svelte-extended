import {
	Dialog as SheetPrimitive,
	type DialogCloseProps as SheetCloseProps,
	type DialogPortalProps as SheetPortalProps,
	type DialogRootProps as SheetProps,
	type DialogTriggerProps as SheetTriggerProps,
} from 'bits-ui';
import SheetContent, { type SheetContentProps } from './sheet-content.svelte';
import SheetDescription, { type SheetDescriptionProps } from './sheet-description.svelte';
import SheetFooter, { type SheetFooterProps } from './sheet-footer.svelte';
import SheetHeader, { type SheetHeaderProps } from './sheet-header.svelte';
import SheetOverlay, { type SheetOverlayProps } from './sheet-overlay.svelte';
import SheetTitle, { type SheetTitleProps } from './sheet-title.svelte';

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
	SheetTitle as Title,
	SheetTrigger as Trigger,
	type SheetCloseProps as CloseProps,
	type SheetContentProps as ContentProps,
	type SheetDescriptionProps as DescriptionProps,
	type SheetFooterProps as FooterProps,
	type SheetHeaderProps as HeaderProps,
	type SheetOverlayProps as OverlayProps,
	type SheetPortalProps as PortalProps,
	type SheetProps as RootProps,
	type SheetCloseProps,
	type SheetContentProps,
	type SheetDescriptionProps,
	type SheetFooterProps,
	type SheetHeaderProps,
	type SheetOverlayProps,
	type SheetPortalProps,
	type SheetProps,
	type SheetTitleProps,
	type SheetTriggerProps,
	type SheetTitleProps as TitleProps,
	type SheetTriggerProps as TriggerProps,
};
