window.onload = function(){
  balance = localStorage.getItem('balance');
  var rng
  var rng2
  var rng3
  var rng4

  document.getElementById('spendingMoney').innerHTML = balance;
  document.getElementById('pull').onclick=playSlots;

  //Runs the slot machine
  function playSlots(){
    //slot calculations
    rng = Math.floor(Math.random(1)*20);
    rng2 = Math.floor(Math.random(1)*20);
    rng3 = Math.floor(Math.random(1)*20);
    rng4 = Math.floor(Math.random(1)*20);
    //slot displays
    document.getElementById('number1').innerHTML=rng;
    document.getElementById('number2').innerHTML=rng2;
    document.getElementById('number3').innerHTML=rng3;
    document.getElementById('number4').innerHTML=rng4;
    //match logic
    if(rng===rng2 && rng2===rng3 && rng3===rng4){
      balance=balance + 100000;
      document.getElementById('result').innerHTML=('JACKPOT!');
    }

    else if(rng===rng2 && rng2===rng3){
      balance=balance + 1000;
    }

    else if(rng===rng2 && rng2===rng4){
      balance=balance + 1000;
    }

    else if(rng===rng3 && rng3===rng4){
      balalnce=balance + 1000;
    }

    else if(rng2===rng3 && rng3===rng4){
      balance=balance + 1000;
    }

    else if(rng===rng2){
      balance=balance+5;
    }

    else if(rng===rng3){
      balance=balance+5;
    }

    else if (rng===rng4){
      balance=balance+5;
    }

    else if(rng2===rng){
      balance=balance+5;
    }

    else if(rng2===rng3){
      balance=balance+5;
    }

    else if(rng2===rng4){
      balance=balance+5;
    }

    else if (rng3===rng){
      balance=balance+5;
    }

    else if(rng3===rng2){
      balance=balance+5;
    }

    else if(rng3===rng4){
      balance=balance+5;
    }

    else if(rng4===rng){
      balance=balance+5;
    }

    else if(rng4===rng2){
      balance=balance+5;
    }

    else if(rng4===rng3){
      balance=balance+5;
    }

    else{
      balance=balance - 7
      console.log(balance);
    }

    if (balance <=0){
    document.getElementById('result').innerHTML=('BUST! Balance reset.');
    balance=1000; 
    }
    //Balance updater
    localStorage.setItem('balance', balance);
    document.getElementById('spendingMoney').innerHTML=balance;
  }


};
