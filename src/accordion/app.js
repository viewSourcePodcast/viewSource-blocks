// import useState from wordpress/element
import { useState } from "@wordpress/element";

function App() {
	const [isExpanded, setIsExpanded] = useState(false);

	// an update function
	function toggleButton() {
		// if (isExpanded) {
		// 	setIsExpanded(false);
		// } else {
		// 	setIsExpanded(true);
		// }
		// or you can write it like this:
		setIsExpanded(!isExpanded);
	}
	return (
		<>
			<h2>
				<button
					id="vs-accordion-button"
					onClick={toggleButton}
					aria-expanded={isExpanded}
					aria-controls="vs-accordion-panel">
					Hello World
				</button>
			</h2>
			{isExpanded && (
				<div id="vs-accordion-panel" aria-labelledby="#vs-accordion-button">
					<p>
						Lorem ipsum dolor sit{" "}
						<a href="https://example.com">amet eu magna</a> phasellus luctus
						viverra cras rhoncus eiusmod. Blandit adipiscing neque pharetra
						etiam venenatis dui pulvinar elementum laoreet do eleifend lobortis.
					</p>
				</div>
			)}
		</>
	);
}

export default App;
