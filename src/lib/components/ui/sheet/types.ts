import type { Dialog as SheetPrimitive, WithElementRef, WithoutChild } from 'bits-ui';
import type { SheetSide } from './variants';

type SheetContentBaseProps = {
	/**
	 * @description
	 * The props used for the sheet portal component.
	 * See https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/utilities/portal/types.ts
	 * for reference.
	 */
	portalProps?: SheetPrimitive.PortalProps;

	/**
	 * @description Defines the side of the screen the sheet will appear.
	 * @defaultValue `"right"`
	 */
	side?: SheetSide;
};

export type SheetContentProps = SheetContentBaseProps &
	WithoutChild<WithElementRef<Omit<SheetPrimitive.ContentProps, 'ref'>, HTMLDivElement>>;
