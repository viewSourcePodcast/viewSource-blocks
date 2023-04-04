/**
 * Accordion Panel 
 *
 * @return {string}
 */
function AccordionPanel({content,id}) {
	return(
		<div id={`vs-accordion-panel-${id}`} aria-labelledby={`vs-accordion-button-${id}`}>
			{content}
		</div>
	)
}

export default AccordionPanel;