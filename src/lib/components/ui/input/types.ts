import type { WithElementRef, WithoutChildren } from 'bits-ui';
import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';

type InputTypeWithoutFile = Exclude<HTMLInputTypeAttribute, 'file'>;

type InputPropsWithTypeFile = {
	/** The input `type` is required to be `"file"` when binding the `files` prop. */
	type: 'file';

	/** Allows binding a `FileList` when the input `type` is `"file"`. */
	files?: FileList;
};

type InputPropsWithoutTypeFile = {
	/** Any input `type` other than 'file'. */
	type?: InputTypeWithoutFile;

	/** The `files` prop is disallowed unless `type` is `"file"`. */
	files?: never;
};

type InputPropsWithoutHTML = WithElementRef<
	InputPropsWithoutTypeFile | InputPropsWithTypeFile,
	HTMLInputElement
>;

type InputPropsWithHTML = WithoutChildren<Omit<HTMLInputAttributes, 'type'>>;

export type InputProps = InputPropsWithoutHTML & InputPropsWithHTML;
