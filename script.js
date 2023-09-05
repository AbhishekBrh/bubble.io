var timer = 60;
var score = 0;
var hitnum1 = 0;


function increseScore(){
   score += 10;
   document.querySelector('#valS').textContent = score;
}

function valhitnum(){
    hitnum1 = Math.floor(Math.random()*10);
   document.querySelector('#hitnum').textContent = hitnum1;
}

function makebubble(){
var value ="";

for(i=1;i<=180;i++){
   var num = Math.floor(Math.random()*10);
   value += `<div class="bubble">${num}</div>`
}

document.querySelector('#pbtm').innerHTML=value;
}

function runTimer(){
  var timerint =  setInterval(function(){
      if(timer>0){
      timer--;
      document.querySelector('#timeval').textContent = timer;
      }
      else{
         clearInterval(timerint);
      }
   },1000)
}

document.querySelector('#pbtm').addEventListener('click',(e)=>{
  var tget = Number(e.target.textContent);
      if(tget===hitnum1){
      increseScore();
      valhitnum();
      makebubble();
      }
});

makebubble();
runTimer();
valhitnum();
