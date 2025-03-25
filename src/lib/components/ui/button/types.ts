import type { WithElementRef } from 'bits-ui';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import { type ButtonSize, type ButtonVariant } from './variants';

//
// BUTTON ELEMENT PROPS
//

/**
 * Defines props for the button element, explicitly disallowing `href`
 * to prevent incorrect usage as a link.
 */
type ButtonElementPropsWithoutHTML = WithElementRef<{ href?: never }, HTMLButtonElement>;
type ButtonElementPropsWithHTML = HTMLButtonAttributes;
type ButtonElementProps = ButtonElementPropsWithoutHTML & ButtonElementPropsWithHTML;

//
// ANCHOR ELEMENT PROPS
//

/**
 * Defines props for the anchor element, explicitly requiring `href`
 * and disallowing `type` to prevent incorrect usage.
 */
type AnchorElementPropsWithoutHTML = WithElementRef<
	{ type?: never; href: string },
	HTMLAnchorElement
>;
type AnchorElementPropsWithHTML = Omit<HTMLAnchorAttributes, 'href'>;
type AnchorElementProps = AnchorElementPropsWithoutHTML & AnchorElementPropsWithHTML;

//
// BUTTON PROPS
//

type ButtonPropsWithoutHTML = {
	/**
	 * Applies color styles to the button.
	 * @defaultValue `"primary"`
	 */
	variant?: ButtonVariant;

	/**
	 * Applies size styles to the button.
	 * @defaultValue `"md"`
	 */
	size?: ButtonSize;
};
type ButtonPropsWithHTML = ButtonElementProps | AnchorElementProps;
export type ButtonProps = ButtonPropsWithoutHTML & ButtonPropsWithHTML;
