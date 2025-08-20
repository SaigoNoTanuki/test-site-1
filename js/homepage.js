const toType = "ADO WORLD ADOMINATION!";
const text = document.getElementById("text");

let i = 0;

function typeWriterAnim() {
    if (i < toType.length) {
        text.innerHTML += toType.charAt(i);
        i++;
        setTimeout(typeWriterAnim, 100);
    }
}

typeWriterAnim();