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

	init() {
		this.handleNavClick()
		this.handleConnectClick()
	}
}

document.addEventListener("DOMContentLoaded",function(){
	app.init()
});