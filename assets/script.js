const themeToggle = document.getElementById("theme-toggle");
const body = document.querySelector("body");

themeToggle.addEventListener("click", function() {
	body.classList.toggle("light");
});
