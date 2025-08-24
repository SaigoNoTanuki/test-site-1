const toType = "ADO WORLD ADOMINATION!";
const text = document.getElementById("text");

// function typeWriterAnim() {
//     if (i < toType.length) {
//         text.innerHTML += toType.charAt(i);
//         i++;
//         setTimeout(typeWriterAnim, 100);
//     }
// }

function typeWriterAnim(typeArray,resultingText,typeIndex = 0) {
    if (typeIndex < typeArray.length) {
        resultingText.innerText += typeArray.charAt(typeIndex);
        setTimeout(() => typeWriterAnim(typeArray, resultingText, typeIndex + 1), 100);
    }
}

typeWriterAnim(toType,text);

const toChange = document.getElementById("textChange");
const changeButton = document.getElementById("textChangerButton");
const originalChangeButtonSize = changeButton.offsetWidth;

const toChangeText = ["A Slightly Changed Text","A Very Changed Text","This Text has Been Changed","A SUUUUPERRRR Changed Text","Stawp Already"]

let textIndex = 0;

changeButton.addEventListener("click",() => {
    toChange.innerText = toChangeText[textIndex];
    textIndex = (textIndex + 1);
    if(textIndex == toChangeText.length + 1) {
        toChange.innerText = "That's it";
        setTimeout(() => {
            toChange.innerText = "I'm taking away your button privileges";
        }, 800);
        changeButton.style.display = "none";
        textIndex % toChangeText.length;
        document.getElementById("cat").style.opacity = 1;
    };
});

changeButton.addEventListener("mouseenter", () => {
    changeButton.style.transition = "transform 0.3s";
    changeButton.style.transform = "scale(1.2)";
});

changeButton.addEventListener("mouseleave", () => {
    changeButton.style.transform = "scale(1)";
});