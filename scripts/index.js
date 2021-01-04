const app = {
	handleNavClick() {
		const navLinks = document.querySelectorAll('.navLinks')
		const menu = document.querySelector('.menuEffects')
		const menuToggle = document.getElementById('menuToggle')

		navLinks.forEach(item => {
			item.addEventListener('click', e => {
				menuToggle.checked = false
				item.scrollIntoView()
			})
		})
	},

	handleConnectClick() {
		const connect = document.querySelectorAll('.primaryButton')
		const contact = document.getElementById('contact')
		connect.forEach(item => {
			item.addEventListener('click', e => {
				contact.scrollIntoView()
			})
		})
	},

	handleArrowClick() {
		const x = window.matchMedia("(max-width: 500px)")
		const scrollContainer = document.querySelector('.projectContainer')
		const rightArrow = document.querySelectorAll('.rightArrow')
		const leftArrow = document.querySelectorAll('.leftArrow')
		if (x.matches) {
			rightArrow.forEach(item => {
				item.addEventListener('click', e => {
					console.log('Working');
					scrollContainer.scrollBy({
						left: 350,
						behavior: 'smooth'
					});
				})
			})
			leftArrow.forEach(item => {
				item.addEventListener('click', e => {
					console.log('Working');
					scrollContainer.scrollBy({
						left: -350,
						behavior: 'smooth'
					});
				})
			})
		} else {
			rightArrow.forEach(item => {
				item.addEventListener('click', e => {
					console.log('Working');
					scrollContainer.scrollBy({
						left: 850,
						behavior: 'smooth'
					});
				})
			})
			leftArrow.forEach(item => {
				item.addEventListener('click', e => {
					console.log('Working');
					scrollContainer.scrollBy({
						left: -850,
						behavior: 'smooth'
					});
				})
			})
		}
	},

	init() {
		this.handleNavClick()
		this.handleConnectClick()
		this.handleArrowClick()
	}
}

document.addEventListener("DOMContentLoaded",function(){
	app.init()
});