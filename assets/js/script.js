const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "web_dev ",
    "ui_ux",
    "web3"

];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function setMorphStyles(element, fraction) {
    element.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    element.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
}

function setMorph(fraction) {
    setMorphStyles(elts.text2, fraction);

    fraction = 1 - fraction;

    setMorphStyles(elts.text1, fraction);

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    setMorphStyles(elts.text2, 1);
    setMorphStyles(elts.text1, 0);
}

function animate() {
    requestAnimationFrame(animate);

    const newTime = new Date();
    const shouldIncrementIndex = cooldown > 0;
    const dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        morph -= cooldown;
        cooldown = 0;

        let fraction = morph / morphTime;

        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }

        setMorph(fraction);
    } else {
        doCooldown();
    }
}

animate();

