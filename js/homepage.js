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

const toChange = document.getElementById("textChange");
const changeButton = document.getElementById("textChangerButton");

const toChangeText = ["A Slightly Changed Text","A Very Changed Text","This Text has Been Changed","A SUUUUPERRRR Changed Text","Stawp Already","I'm taking away your button privilages"]

let textIndex = 0;

changeButton.addEventListener("click",() => {
    toChange.innerText = toChangeText[textIndex];
    textIndex = (textIndex + 1);
    if(textIndex == toChangeText.length) {
        changeButton.style.display = "none";
        textIndex % toChangeText.length;
    };
});
