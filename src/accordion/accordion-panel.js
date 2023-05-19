/**
 * Accordion Panel
 *
 * @return {string}
 */
function AccordionPanel({content,id, isExpanded}) {
	// Return the Accordion Panel
	return(
		<div id={`vs-accordion-panel-${id}`} aria-labelledby={`vs-accordion-button-${id}`}  className={
			isExpanded ? "is-expanded" : ""
		} >
			{content}
		</div>
	)
}

export default AccordionPanel;