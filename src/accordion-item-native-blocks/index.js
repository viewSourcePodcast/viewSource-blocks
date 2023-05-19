/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import metadata from "./block.json";
import edit from "./edit";
import save from "./save";
import icon from "./icon";
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	...metadata,
	icon,
	edit,
	save,
});

function insertButtonInAccordionHeading(element, blockType, attributes) {
	// skip if element is undefined
	if (!element) {
		return;
	}

	// only apply to cover blocks
	if (blockType.name !== "viewsource/accordion-item") {
		return element;
	}
	const output = blockType.save();
	console.log(output);
	// get client id of the block

	// return the element wrapped in a div
	// return <div className="cover-block-wrapper">{element}</div>;
	return <div className="hi">{blockType.save()}</div>;
}

addFilter(
	"blocks.getSaveElement",
	"my-plugin/wrap-cover-block-in-container",
	insertButtonInAccordionHeading,
);
