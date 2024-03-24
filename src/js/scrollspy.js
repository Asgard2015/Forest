let section = document.querySelectorAll('section')
let navLink = document.querySelectorAll('.nav__desktop-item')
window.onscroll = () => {
	section.forEach(sec => {
		let top = window.scrollY
		let offset = sec.offsetTop - 100
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')
		if (top >= offset && top < offset + height) {
			navLink.forEach(links => {
				links.classList.remove('active')
				document.querySelector('.nav__desktop-item[href*=' + id + ']').classList.add('active')
			})
		}
	})
}
