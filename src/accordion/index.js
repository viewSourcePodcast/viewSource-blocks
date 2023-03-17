/**
 * WordPress Dependencies
 */
import { createRoot } from "@wordpress/element";

/**
 * Internal Dependencies
 */
import App from "./app";
import "./style.scss";

const domNode = document.getElementById("vs-accordion-root");
const root = createRoot(domNode);
root.render(<App />);
