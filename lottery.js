window.onload = function() {

  balance=localStorage.getItem('balance');

  document.getElementById('lockIn').onclick = playLotto;

  document.getElementById('spendingMoney').innerHTML = localStorage.getItem('balance');
  console.log(localStorage.getItem('balance'));
  //var playerMoney = Number(localStorage.getItem('balance'));
  /* starts calculations for the lottery game*/
  function playLotto(){
    stringToNum();
    generator();
    winLose();
    //trackBalance();
    /*Generates Winning number*/
    function generator(){
      rng = Math.floor(Math.random(1)*100);
      document.getElementById('winningNum').innerHTML = rng;
      //return rng;
    }

    /*converts player's input into a number*/
    function stringToNum(){
      playerNum = Number(document.getElementById('selectedNum').value)
      //return playerNum
    }

    /*Tells player if they've won or lost and updates balance accordingly*/
    function winLose(){
      if (rng === playerNum){
        document.getElementById('result').innerHTML = 'YOU WON!';
        balance= balance + 10000;
        console.log(balance);
        document.getElementById('spendingMoney').innerHTML = balance;
        //localstorage.setItem('balance', balance)
        //return balance;
      }
      else{
        document.getElementById('result').innerHTML = 'You Lost...';
        balance= balance - 100;
        console.log(balance);
        document.getElementById('spendingMoney').innerHTML = balance;
        //localstorage.setItem('balance', balance)
        //return balance;
      }

      if (balance <=0){
      document.getElementById('result').innerHTML=('BUST! Balance reset.');
      balance=1000;
        document.getElementById('spendingMoney').innerHTML = balance;
      }

    }

    /*keeps track of the player's spending money*/
    /*function trackBalance(){
      //console.log(playerMoney);
      if (rng === playerNum){
        balance + 10000;
        return balance;
        //localstorage.setItem('balance', balance + 10000);
        console.log(balance);
      }
      else{
        balance - 100;
        return balance;
        //localstorage.setItem('balance', balance - 100);
        console.log(balance);
      }
      //document.getElementById("lockIn").addEventListener("click", console.log(balance));
    }*/
    localStorage.setItem('balance', balance);
  }

};
