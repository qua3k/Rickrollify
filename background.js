function rick() {
    const chance = Math.floor(Math.random() * 100);

    function rickrollify() {
        setTimeout(function () {
            location.href =
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
        }, 3000);
    }

    if (chance === 69) {
        rickrollify();
    }
}
