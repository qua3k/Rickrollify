const rickrollify = () => {
    setTimeout(() => { // Wait 3 seconds before rickrolling
        location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1'
    }, 3000)
}

const chance = Math.floor(Math.random() * 100);
    if (chance === 69) {
        rickrollify();
    }
