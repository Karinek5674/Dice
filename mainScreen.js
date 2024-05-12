//pravidla
const pravidlaButton = document.querySelector('.info');
const pravidlaDiv = document.querySelector('.rules');
const xButton = document.querySelector('.xbtn');
const firstHalf = document.querySelector('.firstHalf');
const secondHalf = document.querySelector('.secondHalf');

pravidlaButton.addEventListener('click', () => {
	if (pravidlaDiv.classList.contains('hide-element')) {
		pravidlaDiv.classList.remove('hide-element');
		firstHalf.style.pointerEvents = "none";
		secondHalf.style.pointerEvents = "none";
		firstHalf.style.userSelect = "none";
		secondHalf.style.userSelect = "none";
		firstHalf.style.filter = "blur(6px)"
		secondHalf.style.filter = "blur(6px)"
	}
})

xButton.addEventListener('click', () => {
	pravidlaDiv.classList.add('hide-element');
	firstHalf.style.pointerEvents = "auto";
	secondHalf.style.pointerEvents = "auto";
	firstHalf.style.userSelect = "auto";
		secondHalf.style.userSelect = "auto";
	firstHalf.style.filter = "none"
	secondHalf.style.filter = "none"
})