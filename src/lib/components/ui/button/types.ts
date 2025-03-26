import type { WithElementRef } from 'bits-ui';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import { type ButtonSize, type ButtonVariant } from './variants';

//
// BUTTON ELEMENT PROPS
//

type ButtonElementPropsWithoutHTML = WithElementRef<
	{
		/** @description The `href` prop is disallowed unless `type` is `undefined`. */
		href?: never;
	},
	HTMLButtonElement
>;

type ButtonElementPropsWithHTML = HTMLButtonAttributes;

type ButtonElementProps = ButtonElementPropsWithoutHTML & ButtonElementPropsWithHTML;

//
// ANCHOR ELEMENT PROPS
//

type AnchorElementPropsWithoutHTML = WithElementRef<
	{
		/** @description The `type` prop is disallowed unless ´href` is `undefined`. */
		type?: never;

		/** @description Explicitly require `href`. */
		href: NonNullable<HTMLAnchorAttributes['href']>;
	},
	HTMLAnchorElement
>;

type AnchorElementPropsWithHTML = Omit<HTMLAnchorAttributes, 'href'>;

type AnchorElementProps = AnchorElementPropsWithoutHTML & AnchorElementPropsWithHTML;

//
// BUTTON PROPS
//

type ButtonPropsWithoutHTML = {
	/**
	 * @description Applies color styles to the button.
	 * @defaultValue `"primary"`
	 */
	variant?: ButtonVariant;

	/**
	 * @description Applies size styles to the button.
	 * @defaultValue `"md"`
	 */
	size?: ButtonSize;
};

type ButtonPropsWithHTML = ButtonElementProps | AnchorElementProps;

export type ButtonProps = ButtonPropsWithoutHTML & ButtonPropsWithHTML;
