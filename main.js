const swup = new Swup();
var count = 0;
var timer = setInterval(animateTag, 450);
var tag = document.getElementById("tagimage");

function animateTag() {
	if (count == 8) count = 0;
	tag.src = `tag-images/${count}.png`;
	count++;
}
