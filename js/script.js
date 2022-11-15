const eyeEffect = () => {
    // MOVING EYES // 
    const eyes1 = document.querySelectorAll('.eye1');

    document.addEventListener('mousemove', (e)=>{

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const anchor1 = document.getElementById('char1');
        const rekt1 = anchor1.getBoundingClientRect();

        const anchorX1 = rekt1.left + rekt1.width / 2;
        const anchorY1 = rekt1.top + rekt1.height / 2;

        const angleDeg1 = angle(mouseX, mouseY, anchorX1, anchorY1);

        
        eyes1.forEach(eye => {
            eye.style.transform = `rotate(${135 + angleDeg1 * -1}rad)`;
        })
    })
};

const angle = (cx,cy,ex,ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dx,dy);
    return rad;
};

eyeEffect();