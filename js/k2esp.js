window.onload = start()

function show(){
   window.random = parseInt(Math.random()*window.n5.length)+1
   for(var i = 0; i < choices.length; i++){
      const random = parseInt(Math.random()*window.n5.length)
      if(random<= 0){random = 1}
      choices[i].innerText = window.n5[random][1]
   };
   window.r = parseInt(Math.random()*choices.length)
   choices[r].innerText = window.n5[window.random][1]
   p.innerText = window.n5[window.random][0]
}

function explain(){
   document.getElementById("on").value = window.n5[window.random][2];
   document.getElementById("kun").value = window.n5[window.random][3];
   document.getElementById("traduccion").value = window.n5[window.random][1];
}
function check(button){ 
   if(choices[window.r] == button){
      aciertos+=1;
      aciertosLable.innerText = "Aciertos: " + aciertos
      show()
   }
   else{
      fallos+=1;
      fallosLable.innerText = "Fallos: " + fallos
   }
}

const choices = document.getElementById("choices").getElementsByTagName('button');
const p = document.getElementById("kanji");
const choicesDiv = document.getElementById("choices")
const aciertosLable = document.getElementById("aciertos")
const fallosLable = document.getElementById("fallos")
var aciertos = 0;
var fallos = 0;

function start(){ 
   Papa.parse(("./n1ton5csv/kanji-N5.csv"),{download:true, headers: false, complete: function(results){
      window.n5 = results.data}})
}

   