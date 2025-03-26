import {
	Separator as SeparatorPrimitive,
	type WithElementRef,
	type WithoutChildrenOrChild,
} from 'bits-ui';

type SeparatorHTMLAttributes = WithoutChildrenOrChild<Omit<SeparatorPrimitive.RootProps, 'ref'>>;

export type SeparatorProps = WithElementRef<SeparatorHTMLAttributes, HTMLDivElement>;
