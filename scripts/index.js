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

	init() {
		this.handleNavClick()
	}
}

document.addEventListener("DOMContentLoaded",function(){
	app.init()
});