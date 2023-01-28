const packContainers = [
	...document.querySelectorAll(".plans-container--slider"),
];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

packContainers.forEach((item, i) => {
	let containerDimensions = item.getBoundingClientRect();
	let containerWidth = containerDimensions.width;

	nxtBtn[i].addEventListener("click", () => {
		item.scrollLeft += containerWidth;
	});

	preBtn[i].addEventListener("click", () => {
		item.scrollLeft -= containerWidth;
	});
});
