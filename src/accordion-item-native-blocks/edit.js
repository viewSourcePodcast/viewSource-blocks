import { useEffect } from "@wordpress/element";
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * Internal Dependencies
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const blockProps = useBlockProps();
	const BLOCK_TEMPLATE = [
		[
			"core/heading",
			{
				level: 3,
				lock: { remove: true, move: true },
			},
		],
		[
			"core/group",
			{
				className: "accordion-item__content",
				lock: { remove: true, move: true },
			},
		],
	];
	useEffect(() => {
		setAttributes({ id: clientId });
	}, []);
	const innerBlockProps = useInnerBlocksProps(blockProps, {
		template: BLOCK_TEMPLATE,
	});

	return <div id={attributes.id} {...innerBlockProps}></div>;
}
