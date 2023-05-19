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
import { useBlockProps, RichText, } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

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
	const { title, content } = attributes;

	function updateTitle(value) {
		setAttributes({ title: value });
	}

	function updateContent(value) {
		setAttributes({ content: value });
	}

	useEffect(() => {
		setAttributes({ id: clientId });
	}, [clientId]);

	return <div { ...blockProps }>
		<RichText
				className="wp-block-viewsource-accordion-item-no-control__title"
				tagName="h3"
				allowedFormats={["core/bold", "core/italic"]}
				placeholder={__("Accordion Item title", "viewsource")}
				value={title}
				onChange={updateTitle}
		/>
		<RichText
			className="wp-block-viewsource-accordion-item-no-control__content"
			tagName="p"
			placeholder={__("Accordion Item content", "viewsource")}
			value={content}
			onChange={updateContent}
		/>
	</div>;
}
