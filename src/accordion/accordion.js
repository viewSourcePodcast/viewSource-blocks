import AccordionHeader from './accordion-header.js'
import AccordionPanel from './accordion-panel.js'

/**
 * Accordion Component
 *
 * @return {string}
 */
function Accordion({accordion, isExpanded, expand}) {
	const {heading, content, id} = accordion;
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

export default Accordion;