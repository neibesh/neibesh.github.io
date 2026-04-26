/** Resolves the app mount node; throws if `#root` is missing from the document. */
export function getRootElement(): HTMLElement {
	const el = document.getElementById("root");
	if (!el) {
		throw new Error('Missing root element: expected <div id="root"></div> in index.html');
	}
	return el;
}
