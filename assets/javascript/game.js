// var win = 0;
// var loss = 0;
// var guestleft = 9;


// function randomLetter(letter) {
//     var letter = "abcdefghijklmnopqrstuvwxyz"
//     var num = Math.floor((Math.random() * letter.length + 1));
//     var ranletter = letter.charAt(num);
//     return ranletter;

// }

// for (var i = 0; i < 10; i++) {
//     if (letter === e) {
//         console.log("you got me")
//         win = this.win + 1
//     } else {
//         console.log("nope")
//         loss = this.loss + 1
//     }
// }


document.onkeyup = function (event) {
    console.log(event.key);
    document.querySelector('#guess').textcontent = event.key;
};



// function makeid(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// console.log(makeid(5));