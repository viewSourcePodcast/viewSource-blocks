// import useState from wordpress/element
import { useState } from "@wordpress/element";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	// an update function
	function toggleButton() {
		// if (isOpen) {
		// 	setIsOpen(false);
		// } else {
		// 	setIsOpen(true);
		// }
		// or you can write it like this:
		setIsOpen(!isOpen);
	}
	return (
		<>
			<h2>
				<button 
					id="vs-accordion-button"
					onClick={toggleButton}
					aria-expanded={isOpen}
					aria-controls="vs-accordion-panel"
				>
					Hello World
				</button>
			</h2>
			{
				isOpen && 
				<div id="vs-accordion-panel" aria-labelledby="#vs-accordion-button">
					<p>Lorem ipsum dolor sit <a href="https://example.com">amet eu magna</a> phasellus luctus viverra cras rhoncus eiusmod. Blandit adipiscing neque pharetra etiam venenatis dui pulvinar elementum laoreet do eleifend lobortis.</p>
				</div>
			}
		</>
	);
}

export default App;
