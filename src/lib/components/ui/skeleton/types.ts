import type { WithElementRef, WithoutChildren } from 'bits-ui';
import type { HTMLAttributes } from 'svelte/elements';

type SkeletonHTMLAttributes = WithoutChildren<HTMLAttributes<HTMLDivElement>>;

export type SkeletonProps = WithElementRef<SkeletonHTMLAttributes, HTMLDivElement>;
