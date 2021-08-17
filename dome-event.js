function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
};

const bluebutton = document.getElementById('blue-button');
bluebutton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}