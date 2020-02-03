// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF0000"

function moveDodgerLeft() {
    let leftNumber = dodger.style.left.replace("px","")
    let left = parseInt(leftNumber, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let rightNumber = dodger.style.left.replace("px","");
    let right = parseInt(rightNumber, 10);
    if (right < 200) {
        dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") { moveDodgerLeft();}
    if (e.key === "ArrowRight") {moveDodgerRight();}
});
