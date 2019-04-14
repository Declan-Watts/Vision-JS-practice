function playGame() {
  var winnumber = [];
  for (var i = 1; i < 8; i++){    //i = 1 sets i too 1, i < 7 stops i from being higher than 7, i++ adds 1 too i each time it runs the loop.
    var winnum = i.toString();
    if (i < 7){
      var win = "winNum" + winnum; // == "winNum1" "winNum2" "winNum3" "winNum4" etc.
    } else {
      var win = "bonusNum";
    }
    var randnum = Math.floor(Math.random() * 7 + 1);
    // Need to iterate the array
    for (var x = 0; x < winnumber.length; x++) {
      //itterate in the arrray, we want randnum to not be in the array, if rand num
      var a = winnumber[x];
      while (randnum == a){
        //alert(randnum);
        randnum = Math.floor(Math.random() * 7 + 1);
        //alert(a + " a " + x + " x " + randnum + " randnum " + i + " i");
        x = -1;
      }
    }
    winnumber.push(randnum); // .push is to add to the end of an array, in this case it is adding randnum
    document.getElementById(win).innerHTML = randnum;
  }
};
