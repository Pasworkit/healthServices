import swapElements from "./swapElements.js";

let draggedElement;

export function handleDragStart(e) {
	this.style.opacity = ".4";

	draggedElement = this;
	e.dataTransfer.effectAllowed = 'move';
}

export function handleDragEnd(e) {
	this.style.opacity = "1";

	document.querySelectorAll('.cards__card').forEach(card => {
		card.classList.remove('cards__card--over');
	});
}

export function handleDragOver(e) {
	e.preventDefault();
	return false;
}

export function handleDragEnter(e) {
	this.classList.add('cards__card--over');
}

export function handleDragLeave(e) {
	this.classList.remove('cards__card--over');
}

export function handleDrop(e) {
	e.stopPropagation(); // stops the browser from redirecting.

	if (draggedElement !== this) {
		swapElements(draggedElement, this);
	}

	return false;
}
