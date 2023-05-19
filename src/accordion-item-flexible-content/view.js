import "./slideToggle.js";

// document ready
document.addEventListener("DOMContentLoaded", function () {
	const accordions = document.querySelectorAll(".wp-block-viewsource-accordion-item-flexible-content");
	console.log('hello');
	console.log(accordions);
	// Add event listeners to all accordions and toggle them on click
	accordions.forEach((accordion) => {
		const { accordionHeader, accordionContent } = accordionParts(accordion);
		accordionHeader.addEventListener("click", () =>
			toggleAccordionItem(accordionHeader, accordionContent, accordion)
		);
	});

	/**
	 * Toggle the accordion item
	 * @param {HTMLElement} accordionHeader the button that controls the accordion
	 * @param {HTMLElement} panel the panel that is controlled by the accordion
	 * @param {HTMLElement} accordion the accordion item
	 */
	function toggleAccordionItem(accordionHeader, panel, accordion) {
		const isAccordionOpen = accordionHeader.getAttribute("aria-expanded") === "true";
		panel.slideToggle(250, toggleIsSelected(accordion, "toggle"));
		accordionHeader.setAttribute("aria-expanded", !isAccordionOpen);
	}

	/**
	 * Get the header and content elements of an accordion item
	 * @param {HTMLElement} accordion An accordion item
	 * @returns an object containing the accordion header and content element
	 */
	function accordionParts(accordion) {
		const accordionHeader = accordion.querySelector("button[aria-expanded]");
		const controlsId = accordionHeader.getAttribute("aria-controls");
		const accordionContent = document.getElementById(controlsId);
		return { accordionHeader, accordionContent };
	}

	/**
	 * Add or remove the is-selected class from an Element
	 * @param {HTMLELEMENT} element the element to add or remove the class from
	 * @param {string} type accepts "toggle" or "remove"
	 */
	function toggleIsSelected(element, type) {
		if ("toggle" === type) {
			element.classList.toggle("is-selected");
		} else {
			element.classList.remove("is-selected");
		}
	}
});