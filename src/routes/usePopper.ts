import { createPopper } from '@popperjs/core';

export default function createPopperAction() {
	let popperElement: HTMLElement | null;
	let popperTooltip: HTMLElement | null;
	let popperParams: any;
	let popper: any;

	function initialisePopper() {
		if (popperElement && popperTooltip) {
			popper = createPopper(popperElement, popperTooltip, popperParams);
		}
	}

	function destroyPopper() {
		if (popper) {
			popper.destroy();
			popper = null;
		}
	}

	function usePopperElement(element: HTMLElement) {
		popperElement = element;
		initialisePopper();
		return {
			destroy() {
				popperElement = null;
				destroyPopper();
			}
		};
	}
	function usePopperTooltip(element: HTMLElement, params: any) {
		popperTooltip = element;
		popperParams = params;
		initialisePopper();

		return {
			update(newParams: any) {
				popperParams = newParams;
				popper.setOptions(popperParams);
			},
			destroy() {
				popperTooltip = null;
				destroyPopper();
			}
		};
	}
	return { usePopperElement, usePopperTooltip };
}
