$(document).ready(() => {
	let chance = Math.floor(Math.random() * 100);
	if(chance === 69) {
		rickrollify();
	}
})

const rickrollify = () => {
	setTimeout(() => { // Wait 3 seconds before rickrolling
			window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1'
		}, 3000)
}
