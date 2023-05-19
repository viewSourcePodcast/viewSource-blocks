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
	BlockControls,
} from "@wordpress/block-editor";

import {
	ToolbarGroup,
	ToolbarDropdownMenu,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import HeadingLevelIcon from "./heading-levels";
/**
 * Internal Dependencies
 */
const BLOCK_TEMPLATE = [
	[
		"core/group",
		{
			placeholder: "Add information here.",
			lock: {
				remove: true,
				move: true,
			},
		},
	],
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
	const { title, headingLevel } = attributes;

	const innerBlockProps = useInnerBlocksProps(
		{
			className: "wp-block-viewsource-accordion-item-flexible-content__content",
		},
		{
			template: BLOCK_TEMPLATE,
		},
	);

	const isChildSelected = useSelect((select) =>
		select("core/block-editor").hasSelectedInnerBlock(clientId, true),
	);

	const HeadingTag = `h${headingLevel}`;

	function updateTitle(value) {
		setAttributes({ title: value });
	}

	function setHeadingLevel(level) {
		setAttributes({ headingLevel: parseInt(level) });
	}

	useEffect(() => {
		setAttributes({ id: clientId });
	}, [clientId]);

	return (
		<div {...blockProps}>
			<BlockControls group="block">
				<ToolbarGroup>
					<ToolbarDropdownMenu
						icon={<HeadingLevelIcon level={headingLevel} />}
						label={__("Heading level", "viewsource")}
						controls={[
							{
								label: __("Heading 2", "viewsource"),
								icon: (
									<HeadingLevelIcon level="2" isPressed={headingLevel === 2} />
								),
								onClick: () => setHeadingLevel(2),
								isActive: headingLevel === 2,
							},
							{
								label: __("Heading 3", "viewsource"),
								icon: (
									<HeadingLevelIcon level="3" isPressed={headingLevel === 3} />
								),
								isActive: headingLevel === 3,
								onClick: () => setHeadingLevel(3),
							},
							{
								label: __("Heading 4", "viewsource"),
								icon: (
									<HeadingLevelIcon level="4" isPressed={headingLevel === 4} />
								),
								isActive: headingLevel === 4,
								onClick: () => setHeadingLevel(4),
							},
						]}
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				className="wp-block-viewsource-accordion-item-flexible-content__title"
				tagName={HeadingTag}
				allowedFormats={["core/bold", "core/italic"]}
				placeholder={__("Accordion Item title", "viewsource")}
				value={title}
				onChange={updateTitle}
			/>
			{(isSelected || isChildSelected) && <div {...innerBlockProps} />}
		</div>
	);
}
