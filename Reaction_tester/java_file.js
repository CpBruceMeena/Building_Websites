window.onload = function(){

  var clicked_time;
  var created_time;
  var reaction_time = "0";

  function getRandomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = "#";
    for(var i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*15)];
    }
      return color;
  }

  function makeBox(){
      var time = Math.random();
      time = time*3000;
      setTimeout(function(){
        if(Math.random()>=0.5){
          document.getElementById('box').style.borderRadius = "100px";
        }
        else{
          document.getElementById('box').style.borderRadius = "0px";
        }
        document.getElementById('box').style.display = "block";
        document.getElementById('box').style.top = Math.floor(Math.random()*600 + 1) + "px";
        document.getElementById('box').style.left = Math.floor(Math.random()*900 + 1) + "px";
        document.getElementById('box').style.position = "absolute";
        document.getElementById('box').style.backgroundColor = getRandomColor();
        document.getElementById('box').style.visibility = "visible";
        created_time = Date.now();
      }, time);
      document.getElementById('current_time').innerHTML = (reaction_time) + "s";
      // console.log(reaction_time);
  }
  //
  // function makeCircle(){
  //     var time = Math.random();
  //     time = time*5000;
  //     setTimeout(function(){
  //       document.getElementById('circle').style.display = "block";
  //       document.getElementById('circle').style.top = Math.floor(Math.random()*600 + 1) + "px";
  //       document.getElementById('circle').style.left = Math.floor(Math.random()*900 + 1) + "px";
  //       document.getElementById('circle').style.position = "absolute";
  //       document.getElementById('circle').style.backgroundColor = getRandomColor();
  //       document.getElementById('circle').style.visibility = "visible";
  //       created_time = Date.now();
  //     }, time);
  //     document.getElementById('current_time').innerHTML = (reaction_time) + "s";
  // }

  document.getElementById("box").onclick = function(){
    clicked_time = Date.now();
    reaction_time = clicked_time-created_time;
    reaction_time = reaction_time/1000;
    this.style.display = "none";
    var temp = Math.floor(Math.random()*2);
    console.log(temp);
    makeBox();
    // if(temp%2 == 0){
    //     makeBox();
    // }
    //   else{
    //     makeCircle();
    //   }
    }
    makeBox();
    //
    // document.getElementById("circle").onclick = function(){
    //   clicked_time = Date.now();
    //   reaction_time = clicked_time-created_time;
    //   reaction_time = reaction_time/1000;
    //   this.style.display = "none";
    //   var temp = Math.floor(Math.random()*2);
    //   console.log(temp);
    //   if(temp%2 == 0){
    //       makeBox();
    //   }
    //     else{
    //       makeCircle();
    //     }
    //   }
}
