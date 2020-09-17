var b=document.getElementById("body");

var maindiv=document.createElement("div");


var row1=document.createElement("div");
row1.style.marginLeft="225px";
row1.style.marginTop="85px";

var start=document.createElement("button");
start.innerHTML="start game ";
start.style.fontSize="15px";
start.style.width="35%";
start.style.height="85%";
start.style.color="white";
start.style.marginLeft="125px";
start.style.backgroundColor="blue";
start.setAttribute("onclick","show();");

let randomNum=[];

const show=()=>{
  var x=document.querySelector(".game");
  x.style.display="block";
  x.style.display="flex";
  x.style.flexDirection="row";

  for(var i=0;i<4;i++){
    var x = Math.floor((Math.random() * 9) + 1 );
    var count=0;
    randomNum.push(x);
    if (randomNum.length>1) {
         for(var j=0;j<randomNum.length-1;j++){
          if(randomNum[i]==randomNum[j]){
            randomNum.pop();
            count+=1;
            break;
          }
         }
         if(count>0){
          i--;
         }

      }

    }

    console.log(randomNum);
}
var playCount=0;
var ans=()=>{
  playCount++;
  if(playCount<6){
var successCount=0;
var getValue=document.querySelector(".num"). value;
var str=getValue.toString();
var a=str.split("");

var res=document.querySelector(".result");
res.appendChild(row1);
for(i=0;i<a.length;i++){
  var s=document.querySelector(`.b${i}`);
  s.innerHTML=a[i];
  var count=0;
  for(j=0;j<randomNum.length;j++){
    if(a[i]==randomNum[j]){
      if(i==j){
        s.style.backgroundColor="green";
        count++;
        successCount++;
      }
      else{
        s.style.backgroundColor="orange";
        count++;
      }
    }
  }
  if(count===0){
    s.style.backgroundColor="red";
  }

}
var res=document.querySelector(".result");
res.appendChild(row1);
console.log(playCount);
if(successCount==4){
var w=document.getElementById("win");
w.innerHTML="you are win";
}
}
else{
  var w=document.getElementById("win");
w.innerHTML="you are Loss";
}


}
  
  
var result=document.createElement("div");
result.className="result";
var d1=document.createElement("div");
d1.id="d0";
var d2=document.createElement("div");
d2.id="d1";
var d3=document.createElement("div");
d3.id="d2";
var d4=document.createElement("div");
d4.id="d3";
var d5=document.createElement("div");
d5.id="d4";
result.appendChild(d1);
result.appendChild(d2);
result.appendChild(d3);
result.appendChild(d4);
result.appendChild(d5);


var col1=document.createElement("div");

var b11=document.createElement("h1");
b11.style.width="35px";
b11.style.height="35px";
b11.style.borderRadius="35px";
b11.style.textIndent="9px";
b11.style.border="1px solid grey";
b11.style.backgroundColor="lightgrey";
b11.className="b0"


var b12=document.createElement("h1");
b12.style.width="35px";
b12.style.height="35px";
b12.style.borderRadius="35px";
b12.style.textIndent="9px";
b12.style.border="1px solid grey";
b12.style.backgroundColor="lightgrey";
b12.style.marginLeft="15px";
b12.className="b1";

var b13=document.createElement("h1");
b13.style.width="35px";
b13.style.height="35px";
b13.style.borderRadius="35px";
b13.style.textIndent="9px";
b13.style.border="1px solid grey";
b13.style.backgroundColor="lightgrey";
b13.style.marginLeft="15px";
b13.className="b2";

var b14=document.createElement("h1");
b14.style.width="35px";
b14.style.height="35px";
b14.style.borderRadius="35px";
b14.style.textIndent="9px";
b14.style.border="1px solid grey";
b14.style.backgroundColor="lightgrey";
b14.style.marginLeft="15px";
b14.className="b3";



col1.appendChild(b11);
col1.appendChild(b12);
col1.appendChild(b13);
col1.appendChild(b14);
col1.style.display="flex";
col1.style.flexDirection="row"

row1.appendChild(col1);

var play=document.createElement('div');
play.className="game"

var input=document.createElement("input");
input.setAttribute("type","text");
input.className="num";
var submit=document.createElement("button");
submit.innerHTML="check";
submit.setAttribute("onclick","ans(); ")
play.appendChild(input);
play.appendChild(submit);
play.style.display="none";
play.style.marginLeft="275px";
play.style.marginTop="35px";

var win=document.createElement("div");
var winstate=document.createElement("h1");
winstate.id="win";
win.appendChild(winstate);


maindiv.appendChild(start);
maindiv.appendChild(play);
maindiv.appendChild(result);
maindiv.appendChild(win);

document.body.appendChild(maindiv);
