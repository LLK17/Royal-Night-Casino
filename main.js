window.onload = function() {

  document.getElementById('lockIn').onclick=result;
  document.getElementById('selectedNum');

  function result(){
    var rng = Math.floor(Math.random()*100);
      console.log(rng);
    document.getElementById('result').innerHTML = rng;
      console.log(document.getElementById('result'))


}



};
