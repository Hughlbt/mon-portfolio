document.querySelectorAll('.circle-outer').forEach(cercle => {
    const percent = parseInt(cercle.getAttribute('data-percent'), 10);
    const color = cercle.getAttribute('data-color') || '#999';

    const middle = cercle.querySelector('.circle-middle');
    middle.style.setProperty('--color', color);
    middle.style.backgroundColor = color;

    const anim = cercle.querySelector('.circle-anim');

    let current = 0;
    let frameCount = 0;
    const speed = 6;
    let isPaused = false;
    let pauseStart = 0;
    const pauseDuration = 2000;

    function animate(timestamp) {
        if (!timestamp) timestamp = 0;

        if (isPaused) {
            if (timestamp - pauseStart >= pauseDuration) {
                isPaused = false;
                current = 0;
            }
        } else {
            frameCount++;
            if (frameCount % speed === 0) {
                current++;
                if (current > percent) {
                    isPaused = true;
                    pauseStart = timestamp;
                }
                const angle = (current / 100) * 360;
                anim.style.background = `conic-gradient(${color} 0deg ${angle}deg, transparent ${angle}deg 360deg)`;
            }
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});
