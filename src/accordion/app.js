// import useState from wordpress/element
import { useState } from "@wordpress/element";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	// an update function
	function toggleButton() {
		setIsOpen(!isOpen);
	}
	return (
		<>
			<button onClick={toggleButton}>Hello</button>
			{isOpen && <p>World</p>}
		</>
	);
}

export default App;
