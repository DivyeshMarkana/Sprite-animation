let tID; // use varible for clear setInterval()

function animateScript() {

    let position = 213.33; // start position
    const interval = 90 // for setInterval()

    tID = setInterval( () => {
        document.getElementById("image").style.backgroundPosition = `${position}px 0px`;

        if (position < 1280) {
            position = position + 213.33;
        } else {
            position = 213.33;
        }
    }, interval)
}