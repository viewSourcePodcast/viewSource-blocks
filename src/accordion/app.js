// import useState from wordpress/element
import { useState } from "@wordpress/element";

import Accordion from "./accordion";


function App() {

	// Populate our default accordion data.
	const [accordions, setAccordions] = useState([
		{
			id: 0,
			heading: "Hello World",
			content: "Lorem ipsum dolor sit amet eu magna phasellus luctus viverra cras rhoncus eiusmod. Blandit adipiscing neque pharetra etiam venenatis dui pulvinar elementum laoreet do eleifend lobortis."
		},
		{
			id: 1,
			heading: "Hello World",
			content: "Lorem ipsum dolor sit amet eu magna phasellus luctus viverra cras rhoncus eiusmod. Blandit adipiscing neque pharetra etiam venenatis dui pulvinar elementum laoreet do eleifend lobortis."
		},
		{
			id: 2,
			heading: "Hello World",
			content: "Lorem ipsum dolor sit amet eu magna phasellus luctus viverra cras rhoncus eiusmod. Blandit adipiscing neque pharetra etiam venenatis dui pulvinar elementum laoreet do eleifend lobortis."
		}
	]);

	// Set the active accordion.
	const [activeId, setActiveId] = useState(0);

	function expand( accordion ){
		setActiveId(accordion.id);
	}


	return (
		<>
			{
				accordions.map((accordion) => {
					return <Accordion 
						accordion={accordion} 
						activeId={activeId} 
						isExpanded={activeId === accordion.id}
						expand={() => expand(accordion)} />
				})
			}
		</>
	);
}

export default App;
