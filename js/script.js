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

const login = document.querySelectorAll(".login-input");
const cat = document.getElementById("char1");
const eye1 = document.getElementById("eyeLeft");
const eye2 = document.getElementById("eyeRight");

document.addEventListener('DOMContentLoaded', ()=>{
    login.forEach(element => {
        if(element.value != "" ){
            element.parentElement.classList.add("animation");
            element.parentElement.classList.add("animation-color");
        }
    });
})

login.forEach(element => {
    element.addEventListener('focus', ()=>{
        element.parentElement.classList.add("animation");
        element.parentElement.classList.add("animation-color");
    })
    element.addEventListener('focusout', ()=>{
        if(element.value != '') return;
        element.parentElement.classList.remove("animation");
        element.parentElement.classList.remove("animation-color");
    })
});
document.addEventListener('keypress', doThis);
document.addEventListener('click', doThis)

function doThis() {
    let count = 0;
    login.forEach(element => {
        if(element.value != ''){
            count++;
        }
    });
    if(count < 2){
        cat.src = "./images/cat1.png";
        eye2.style.visibility = "visible";
        eye1.style.visibility = "visible";
    }
    if(count>=2){
        cat.src = "./images/cat2.png";
        eye2.style.visibility = "hidden";
    }if(count >= 4){
        cat.src = "./images/cat3.png";
        eye2.style.visibility = "visible";
    }if(count >= 7){
        cat.src = "./images/cat4.png";
        eye2.style.visibility = "hidden";
        eye1.style.visibility = "hidden";
    }
}