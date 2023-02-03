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
import { useBlockProps, RichText, MediaUpload } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
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
	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();
	const [heading, setHeading] = useState(attributes.content);

	if (!attributes.backgroundColor) {
		setAttributes({ backgroundColor: "secondary" });
	}
	if (!attributes.textColor) {
		setAttributes({ textColor: "tertiary" });
	}

	function setHeadingContent(content) {
		setAttributes({ content: content });
		setHeading(content);
	}

	function selectImage(value) {
		setAttributes({
			imgUrl: value.sizes.full.url,
		});
	}

	return (
		<div {...blockProps}>
			<div className="hello-world-image">
				<MediaUpload
					onSelect={selectImage}
					render={({ open }) => {
						return (
							<button onClick={open}>
								<img src={attributes.imgUrl} />
							</button>
						);
					}}
				/>
			</div>
			<h3 className="hello-world-text">
				<RichText
					className="custom-hello-world-text"
					tagName="h3"
					placeholder="Enter text.."
					value={heading}
					onChange={setHeadingContent}
				/>
			</h3>
		</div>
	);
}
