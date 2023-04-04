import AccordionHeader from './accordion-header.js'
import AccordionPanel from './accordion-panel.js'

/**
 * Accordion Component
 *
 * @return {string}
 */
function AccordionItem({accordion, isExpanded, expand}) {

	// Desctructure the accordion object
	const {heading, content, id} = accordion;

	// Return the Accordion Header and Panel
	return (
		<>
			<AccordionHeader
				expand={expand}
				isExpanded={isExpanded}
				heading={heading}
				id={id}
			/>
			{isExpanded && (
				<AccordionPanel content={content} id={id} />
			)}
		</>
	)
}

export default AccordionItem;