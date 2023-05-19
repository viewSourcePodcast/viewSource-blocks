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
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { title, content } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<h3 className="wp-block-viewsource-accordion-item-no-control__title">
				<button
					className="link-button"
					id={`${attributes.id}-button`}
					aria-controls={`${attributes.id}-text`}
					aria-expanded="false">
					{title}
				</button>
			</h3>
			<p
				id={`${attributes.id}-text`}
				aria-labelledby={ `${ attributes.id }-button` }
				className="wp-block-viewsource-accordion-item-no-control__content"
			>
				{content}
			</p>
		</div>
	);
}
