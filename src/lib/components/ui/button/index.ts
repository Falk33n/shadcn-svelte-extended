import Button from './button.svelte';
import type { ButtonProps } from './types';
import { type ButtonSize, type ButtonVariant, buttonVariants } from './variants';

// Export as `Root` and `RootProps` to support `import * as Button` style namespacing.
export {
	Button,
	buttonVariants,
	Button as Root,
	type ButtonProps,
	type ButtonSize,
	type ButtonVariant,
	type ButtonProps as RootProps,
};
