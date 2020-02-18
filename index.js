// Your code here
let dodger = document.querySelector("#dodger");

document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowUp") {
        moveDodgerUp();
    }
    
    if(e.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    if(e.key === "ArrowRight") {
        moveDodgerRight();
    }

    if(e.key === "ArrowDown") {
        moveDodgerDown();
    }
});

function moveDodgerUp() {
    let UpNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(UpNumbers, 10);
    if(bottom < 400) {
        dodger.style.bottom = `${bottom + 1}px`;
    }
}

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if(left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if(left < 380) {
        dodger.style.left = `${left + 1}px`;
    }
}

function moveDodgerDown() {
    let UpNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(UpNumbers, 10);
    if(bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`;
    }
}