import {
	AlertDialog as AlertDialogPrimitive,
	type AlertDialogPortalProps,
	type AlertDialogRootProps as AlertDialogProps,
	type AlertDialogTriggerProps,
} from 'bits-ui';
import AlertDialogAction, { type AlertDialogActionProps } from './alert-dialog-action.svelte';
import AlertDialogCancel, { type AlertDialogCancelProps } from './alert-dialog-cancel.svelte';
import AlertDialogContent, { type AlertDialogContentProps } from './alert-dialog-content.svelte';
import AlertDialogDescription, {
	type AlertDialogDescriptionProps,
} from './alert-dialog-description.svelte';
import AlertDialogFooter, { type AlertDialogFooterProps } from './alert-dialog-footer.svelte';
import AlertDialogHeader, { type AlertDialogHeaderProps } from './alert-dialog-header.svelte';
import AlertDialogOverlay, { type AlertDialogOverlayProps } from './alert-dialog-overlay.svelte';
import AlertDialogTitle, { type AlertDialogTitleProps } from './alert-dialog-title.svelte';

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

export {
	AlertDialogAction as Action,
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	AlertDialogPortal,
	AlertDialogTitle,
	AlertDialogTrigger,
	AlertDialogCancel as Cancel,
	AlertDialogContent as Content,
	AlertDialogDescription as Description,
	AlertDialogFooter as Footer,
	AlertDialogHeader as Header,
	AlertDialogOverlay as Overlay,
	AlertDialogPortal as Portal,
	AlertDialog as Root,
	AlertDialogTitle as Title,
	AlertDialogTrigger as Trigger,
	type AlertDialogActionProps as ActionProps,
	type AlertDialogActionProps,
	type AlertDialogCancelProps,
	type AlertDialogContentProps,
	type AlertDialogDescriptionProps,
	type AlertDialogFooterProps,
	type AlertDialogHeaderProps,
	type AlertDialogOverlayProps,
	type AlertDialogPortalProps,
	type AlertDialogProps,
	type AlertDialogTitleProps,
	type AlertDialogTriggerProps,
	type AlertDialogCancelProps as CancelProps,
	type AlertDialogContentProps as ContentProps,
	type AlertDialogDescriptionProps as DescriptionProps,
	type AlertDialogFooterProps as FooterProps,
	type AlertDialogHeaderProps as HeaderProps,
	type AlertDialogOverlayProps as OverlayProps,
	type AlertDialogPortalProps as PortalProps,
	type AlertDialogProps as RootProps,
	type AlertDialogTitleProps as TitleProps,
	type AlertDialogTriggerProps as TriggerProps,
};
