function randomLetter() {
    var letter = "abcdefghijklmnopqrstuvwxyz"
    var num = Math.floor((Math.random() * letter.length + 1));
    var ranletter = letter.charAt(num);
    return ranletter;

}
// document.onkeyup = function (guess) {
//     console.log(guess.key);
//     document.querySelector('#guess').textContent = guess.key + (',');
// };

var win = 0;
var loss = 0;
var guestleft = 9;
document.onkeyup = function guess() {
    console.log(guess.key);
    document.querySelector('#guess').textContent = guess.key + (',');
};


for (var i = 0; i < 10; i++) {

    if (randomLetter() === guess()) {
        console.log("you got me");
        win++
        guestleft--;
    } else {
        console.log("nope");
        loss = this.loss + 1;
        guestleft--;
    }
}
