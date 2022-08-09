let draggedElement;

export function handleDragStart(e) {
	this.style.opacity = ".4";

	draggedElement = this;

	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', this.innerHTML);
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
		draggedElement.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
	}

	return false;
}
