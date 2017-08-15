window.onload = function() {
  sessionStorage.setItem('balance', Number('1000'))
  document.getElementById('lockIn').onclick=playLotto;
  var rng;
  var playerNum;
  /* starts calculations for the lottery game*/
  function playLotto(){
    stringToNum();
    generator();
    winLose();
    /*Generates Winning number*/
    function generator(){
      rng = Math.floor(Math.random(1)*100);
      //console.log(rng);
      document.getElementById('winningNum').innerHTML = rng;
      return rng;
    }

    /*converts player's input into a number*/
    function stringToNum(){
      playerNum = Number(document.getElementById('selectedNum').value)
      //console.log(playerNum)
      return playerNum
    }

    /*Tells player if they've won or lost*/
    function winLose(){
      if (rng === playerNum){
        document.getElementById('result').innerHTML = 'YOU WON!';
      }
      else{
        document.getElementById('result').innerHTML = 'You Lost...';
      }
    }
  }

};
