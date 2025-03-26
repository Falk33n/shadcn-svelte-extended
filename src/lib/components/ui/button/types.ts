import type { WithElementRef } from 'bits-ui';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import { type ButtonSize, type ButtonVariant } from './variants';

//
// BUTTON ELEMENT PROPS
//

type ButtonElementBaseProps = {
	/** @description The `href` prop is disallowed unless `type` is `undefined`. */
	href?: never;
};

type ButtonElementProps = WithElementRef<
	ButtonElementBaseProps & HTMLButtonAttributes,
	HTMLButtonElement
>;

//
// ANCHOR ELEMENT PROPS
//

type AnchorElementBaseProps = {
	/** @description The `type` prop is disallowed unless ´href` is `undefined`. */
	type?: never;

	/** @description Explicitly require `href`. */
	href: NonNullable<HTMLAnchorAttributes['href']>;
};

type AnchorElementProps = WithElementRef<
	AnchorElementBaseProps & Omit<HTMLAnchorAttributes, 'href'>,
	HTMLAnchorElement
>;

//
// BUTTON PROPS
//

type ButtonBaseProps = {
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

export type ButtonProps = ButtonBaseProps & (ButtonElementProps | AnchorElementProps);
