/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/accordion-item-flexible-content/slideToggle.js":
/*!************************************************************!*\
  !*** ./src/accordion-item-flexible-content/slideToggle.js ***!
  \************************************************************/
/***/ (() => {

/* plain JS slideToggle */

HTMLElement.prototype.slideToggle = function (duration, callback, display) {
  if (this.clientHeight === 0) {
    _s(this, duration, callback, true, display);
  } else {
    _s(this, duration, callback, false, display);
  }
};
HTMLElement.prototype.slideUp = function (duration, callback, display) {
  _s(this, duration, callback, false, display);
};
HTMLElement.prototype.slideDown = function (duration, callback, display) {
  _s(this, duration, callback, true, display);
};
function _s(el, duration, callback, isDown, display) {
  if (typeof duration === "undefined") duration = 400;
  if (typeof isDown === "undefined") isDown = false;
  if (typeof display === "undefined") display = "block";
  el.style.overflow = "hidden";
  if (isDown) el.style.display = display;
  var elStyles = window.getComputedStyle(el);
  var elHeight = parseFloat(elStyles.getPropertyValue("height"));
  var elPaddingTop = parseFloat(elStyles.getPropertyValue("padding-top"));
  var elPaddingBottom = parseFloat(elStyles.getPropertyValue("padding-bottom"));
  var elMarginTop = parseFloat(elStyles.getPropertyValue("margin-top"));
  var elMarginBottom = parseFloat(elStyles.getPropertyValue("margin-bottom"));
  var stepHeight = elHeight / duration;
  var stepPaddingTop = elPaddingTop / duration;
  var stepPaddingBottom = elPaddingBottom / duration;
  var stepMarginTop = elMarginTop / duration;
  var stepMarginBottom = elMarginBottom / duration;
  var start;
  function step(timestamp) {
    if (start === undefined) start = timestamp;
    var elapsed = timestamp - start;
    if (isDown) {
      el.style.height = stepHeight * elapsed + "px";
      el.style.paddingTop = stepPaddingTop * elapsed + "px";
      el.style.paddingBottom = stepPaddingBottom * elapsed + "px";
      el.style.marginTop = stepMarginTop * elapsed + "px";
      el.style.marginBottom = stepMarginBottom * elapsed + "px";
    } else {
      el.style.height = elHeight - stepHeight * elapsed + "px";
      el.style.paddingTop = elPaddingTop - stepPaddingTop * elapsed + "px";
      el.style.paddingBottom = elPaddingBottom - stepPaddingBottom * elapsed + "px";
      el.style.marginTop = elMarginTop - stepMarginTop * elapsed + "px";
      el.style.marginBottom = elMarginBottom - stepMarginBottom * elapsed + "px";
    }
    if (elapsed >= duration) {
      el.style.height = "";
      el.style.paddingTop = "";
      el.style.paddingBottom = "";
      el.style.marginTop = "";
      el.style.marginBottom = "";
      el.style.overflow = "";
      if (!isDown) el.style.display = "none";
      if (typeof callback === "function") callback();
    } else {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************!*\
  !*** ./src/accordion-item-flexible-content/view.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slideToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideToggle.js */ "./src/accordion-item-flexible-content/slideToggle.js");
/* harmony import */ var _slideToggle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slideToggle_js__WEBPACK_IMPORTED_MODULE_0__);


// document ready
document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".wp-block-viewsource-accordion-item-flexible-content");
  console.log('hello');
  console.log(accordions);
  // Add event listeners to all accordions and toggle them on click
  accordions.forEach(accordion => {
    const {
      accordionHeader,
      accordionContent
    } = accordionParts(accordion);
    accordionHeader.addEventListener("click", () => toggleAccordionItem(accordionHeader, accordionContent, accordion));
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
    return {
      accordionHeader,
      accordionContent
    };
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
})();

/******/ })()
;
//# sourceMappingURL=view.js.map