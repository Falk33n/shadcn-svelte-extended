import { getContrastingRippleColor } from './ripple-utils';

type RippleEvent = MouseEvent | FocusEvent | KeyboardEvent;

function createRipple(e: RippleEvent, parent: HTMLElement) {
	const isNotKeyboardClick = e instanceof KeyboardEvent && e.key !== ' ' && e.key !== 'Enter';
	const isNotFocusVisible = e instanceof FocusEvent && !parent.matches(':focus-visible');

	// These checks are neeced to not make it create duplicate ripples.
	// Since when the user clicks on the button for the first time
	// it counts as both a focus event and a click event.
	if (isNotKeyboardClick || isNotFocusVisible) return;

	const parentPosition = window.getComputedStyle(parent).position;
	const parentOverflow = window.getComputedStyle(parent).overflow;
	const parentBgColor = window.getComputedStyle(parent).backgroundColor;
	const rippleColor = getContrastingRippleColor(parentBgColor);

	const parentHasCorrectStyles = parentPosition !== 'static' && parentOverflow === 'hidden';

	if (!parentHasCorrectStyles) {
		parent.classList.add('overflow-hidden', 'relative');
	}

	const parentSize = Math.max(parent.offsetWidth, parent.offsetHeight);
	const rect = parent.getBoundingClientRect();

	let rippleX = 0;
	let rippleY = 0;

	if (e instanceof MouseEvent) {
		rippleX = e.clientX - rect.left - parentSize / 2;
		rippleY = e.clientY - rect.top - parentSize / 2;
	} else {
		rippleX = rect.width / 2 - parentSize / 2;
		rippleY = rect.height / 2 - parentSize / 2;
	}

	const ripple = document.createElement('span');

	ripple.ariaHidden = 'true';

	ripple.classList.add(
		'rounded-full',
		'scale-0',
		'transition-[scale,opacity]',
		'duration-600',
		'pointer-events-none',
		'absolute',
	);

	ripple.style.background = rippleColor;
	ripple.style.width = `${parentSize}px`;
	ripple.style.height = `${parentSize}px`;
	ripple.style.left = `${rippleX}px`;
	ripple.style.top = `${rippleY}px`;

	parent.appendChild(ripple);

	requestAnimationFrame(() => {
		ripple.classList.remove('scale-0');
		ripple.classList.add('scale-200', 'opacity-0');
	});

	const delayRemoveRipple = setTimeout(() => {
		ripple.remove();
	}, 600);

	return () => clearTimeout(delayRemoveRipple);
}

/**
 * @description
 * Adds `onclick`, `onfocus` and `onkeydown` events to the DOM element where it is applied.
 *
 * @returns
 * A callback function that removes the events when the element is removed from the DOM.
 */
export function addRippleEffect(parent: HTMLElement) {
	parent.addEventListener('click', (e) => createRipple(e, parent));
	parent.addEventListener('focus', (e) => createRipple(e, parent));
	parent.addEventListener('keydown', (e) => createRipple(e, parent));

	return () => {
		parent.removeEventListener('click', (e) => createRipple(e, parent));
		parent.removeEventListener('focus', (e) => createRipple(e, parent));
		parent.removeEventListener('keydown', (e) => createRipple(e, parent));
	};
}
