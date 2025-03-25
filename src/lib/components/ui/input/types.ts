import type { WithElementRef } from 'bits-ui';
import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';

type InputTypeWithoutFile = Exclude<HTMLInputTypeAttribute, 'file'>;

/**
 * Allows binding the `files` prop when the input type is `file`, without
 * causing linting errors.
 */
type InputPropsWithTypeFile = { type: 'file'; files?: FileList };

/**
 * Prevents binding the `files` prop unless the input type is `file`.
 */
type InputPropsWithoutTypeFile = { type?: InputTypeWithoutFile; files?: never };

type InputPropsWithoutHTML = WithElementRef<InputPropsWithoutTypeFile | InputPropsWithTypeFile>;
type InputPropsWithHTML = Omit<HTMLInputAttributes, 'type'>;
export type InputProps = InputPropsWithoutHTML & InputPropsWithHTML;
