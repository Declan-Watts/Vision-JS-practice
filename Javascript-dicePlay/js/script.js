// When the play button is pressed it runs this function
function play() {
  // This runs a for loop to make a new random number
  // for each di on the page, and then it changes the
  // image to the corresponding di
  for (let i = 1; i <= 8; i++) {
    // This is the random number that is generated from 1 - 6
    var diceroll = Math.floor(Math.random() * 6 + 1);
    // This is a variable with the image name, e.g. 'd1.gif', 'd4.gif', etc
    var dice = `d${diceroll}.gif`;
    // This is a variable for the id of the dice, e.g. 'dice1', 'dice3', etc
    // It uses the i variable from the for loop so it iterates through all of
    // numbers between 1 - 8, so it gets every dice image on the page
    var dID = `dice${i}`;
    // This changes the html of the image using DOM, with the variables created above
    document.getElementById(dID).src = `img/${dice}`;
  }
}
