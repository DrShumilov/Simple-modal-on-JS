
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var cls = document.getElementById('cls');

btn.onclick = function () {
	modal.style.display = 'block';
}
cls.onclick = function () {
	modal.style.display = 'none';
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
}