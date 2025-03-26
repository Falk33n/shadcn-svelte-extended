import type { WithElementRef, WithoutChildren } from 'bits-ui';
import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';

//
// FILE PROPS
//

type ExcludeInputTypeFile = Exclude<HTMLInputTypeAttribute, 'file'>;

type InputWithoutTypeFileProps = {
	/** @description Any input `type` other than `"file"`. */
	type?: ExcludeInputTypeFile;

	/** @description The `files` prop is disallowed unless `type` is `"file"`. */
	files?: never;
};

type InputWithTypeFileProps = {
	/** @description The input `type` is required to be `"file"` when binding the `files` prop. */
	type: 'file';

	/** @description Allows binding a `FileList` when the input `type` is `"file"`. */
	files?: FileList;
};

//
// INPUT PROPS
//

type InputBaseProps = WithoutChildren<
	WithElementRef<Omit<HTMLInputAttributes, 'type'>, HTMLInputElement>
>;

export type InputProps = InputBaseProps & (InputWithoutTypeFileProps | InputWithTypeFileProps);
