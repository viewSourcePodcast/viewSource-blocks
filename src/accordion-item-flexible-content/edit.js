import { useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
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
import {
	useBlockProps,
	RichText,
	useInnerBlocksProps,
} from "@wordpress/block-editor";

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
const BLOCK_TEMPLATE = [
	["core/group", {
		placeholder: "Add information here.", "lock": {
			"remove": true,
			"move": true
	} }],
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const blockProps = useBlockProps();
	const { title } = attributes;

	const innerBlockProps = useInnerBlocksProps(
		{
			className: "wp-block-viewsource-accordion-item-flexible-content__content",
		},
		{
			template: BLOCK_TEMPLATE,
		}
	);

	const isChildSelected = useSelect((select) =>
	select("core/block-editor").hasSelectedInnerBlock(clientId, true)
);

	function updateTitle(value) {
		setAttributes({ title: value });
	}

	useEffect(() => {
		setAttributes({ id: clientId });
	}, [clientId]);

	return (
		<div {...blockProps}>
			<RichText
				className="wp-block-viewsource-accordion-item-flexible-content__title"
				tagName="h3"
				allowedFormats={["core/bold", "core/italic"]}
				placeholder={__("Accordion Item title", "viewsource")}
				value={title}
				onChange={updateTitle}
			/>
			{(isSelected || isChildSelected) && <div {...innerBlockProps} />}
		</div>
	);
}
