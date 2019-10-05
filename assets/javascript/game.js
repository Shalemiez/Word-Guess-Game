var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


document.onkeyup = function (event) {
    var guess = event.key;
    document.querySelector('#guess').textContent = event.key;
    console.log(event.key)
};
function randomLetter() {
    var num = Math.floor((Math.random() * letter.length));
    var ranletter = letter[num];
    return ranletter;

}

var computer = randomLetter();
var win = 0;
var loss = 0;
var total = 10;
letterused = [];



document.querySelector('#win').textContent = win;
document.querySelector('#loss').textContent = loss;
document.querySelector('#total').textContent = total;

function reset() {
    total = 10;
    win = 0;
    loss = 0;
}




if (computer === guess) {
    console.log("you got me");
    win++

} else {
    console.log("nope");
    loss++;
    total--;
    letterused.push(guess);
}






// document.getElementById('win').innerHTML = win;
// document.getElementById('loss').innerHTML = loss;
// document.getElementById('guessleft').innerHTML = guessleft;