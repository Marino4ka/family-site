var aside = document.getElementById('aside')
var aside__backdrop = document.getElementById('aside-backdrop');

function toggleAside(action) {
	if(action == 'show') {
		aside.style.left = '0px';
		aside__backdrop.style.display = 'block';
	} else {
		aside.style.left = '-270px';
		aside__backdrop.style.display = 'none';
	}
}
