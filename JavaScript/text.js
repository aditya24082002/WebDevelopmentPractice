let clickCounter = 0;

function redbtnClick() {
    clickCounter++;
    const redContainer = document.getElementById('redContainer');
    const clickCountText = document.getElementById('clickCount');
    clickCountText.textContent = `Button clicked ${clickCounter} times`;
}

function bluebtnClick(){
    alert("Blue Button Clicked !!");
}

function yellowbtnClick(){
    alert("Yellow Button Clicked !!");
}