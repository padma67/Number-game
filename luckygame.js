var b=document.getElementById("body");

var maindiv=document.createElement("div");
var score=document.createElement("div");
score.className="score";
score.style.color="DeepPink";
score.style.marginLeft="225px";
score.style.marginTop="55px";
score.style.display="none";
var pointLabel=document.createElement("label");
pointLabel.innerHTML="Score";
var point =document.createElement("div");
point.style.width="55px";
point.style.height="25px";
point.style.marginLeft="35px";
point.style.backgroundColor="gold";
point.style.border="1px solid black";
point.className="point"
score.appendChild(pointLabel);
score.appendChild(point)


var row1=document.createElement("div");
row1.style.marginLeft="225px";
row1.style.marginTop="85px";
row1.className="game";

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
	var y=document.querySelector(".score");
	y.style.display="block";
	y.style.display="flex";

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


 var p1 = (className) => {
    var s=document.querySelector(`.${className}`);
    var val=s.value;
    var position=0;
    var count=0;
    console.log(val);
    for(i=0;i<randomNum.length;i++){
    	if(randomNum[i]==val){
    		if(i==position){
    			s.style.backgroundColor="green";
    			count++;
    		}
    		else{
    			s.style.backgroundColor="orange";
    			count++;
    		}
    	}
    }
    if(count===0){
    	s.style.backgroundColor="red"
    }
    console.log(count);

  };

  var p2 = (className) => {
    var s=document.querySelector(`.${className}`);
    var val=s.value;
    var position=1;
    var count=0;
    console.log(val);
    for(i=0;i<randomNum.length;i++){
    	if(randomNum[i]==val){
    		if(i==position){
    			s.style.backgroundColor="green";
    			count++;
    		}
    		else{
    			s.style.backgroundColor="orange";
    			count++;
    		}
    	}
    }
    if(count===0){
    	s.style.backgroundColor="red"
    }
    console.log(count);

  };

  var p3 = (className) => {
    var s=document.querySelector(`.${className}`);
    var val=s.value;
    var position=2;
    var count=0;
    console.log(val);
    for(i=0;i<randomNum.length;i++){
    	if(randomNum[i]==val){
    		if(i==position){
    			s.style.backgroundColor="green";
    			count++;
    		}
    		else{
    			s.style.backgroundColor="orange";
    			count++;
    		}
    	}
    }
    if(count===0){
    	s.style.backgroundColor="red"
    }
    console.log(count);

  };

  var p4 = (className) => {
    var s=document.querySelector(`.${className}`);
    var val=s.value;
    var position=3;
    var count=0;
    console.log(val);
    for(i=0;i<randomNum.length;i++){
    	if(randomNum[i]==val){
    		if(i==position){
    			s.style.backgroundColor="green";
    			count++;
    		}
    		else{
    			s.style.backgroundColor="orange";
    			count++;
    		}
    	}
    }
    if(count===0){
    	s.style.backgroundColor="red"
    }
    console.log(count);

  };
  
  

var col1=document.createElement("div");

var b11=document.createElement("input");
b11.setAttribute("type","text");
b11.style.width="35px";
b11.style.height="35px";
b11.style.borderRadius="35px";
b11.style.textIndent="9px";
b11.style.border="1px solid grey";
b11.style.backgroundColor="lightgrey";
b11.className="b11"
b11.setAttribute("onchange",'p1(this.className); ')

var b12=document.createElement("input");
b12.setAttribute("type","text");
b12.style.width="35px";
b12.style.height="35px";
b12.style.borderRadius="35px";
b12.style.textIndent="9px";
b12.style.border="1px solid grey";
b12.style.backgroundColor="lightgrey";
b12.style.marginTop="15px";
b12.className="b12";
b12.setAttribute("onchange",'p1(this.className); ')

var b13=document.createElement("input");
b13.setAttribute("type","text");
b13.style.width="35px";
b13.style.height="35px";
b13.style.borderRadius="35px";
b13.style.textIndent="9px";
b13.style.border="1px solid grey";
b13.style.backgroundColor="lightgrey";
b13.style.marginTop="15px";
b13.className="b13";
b13.setAttribute("onchange",'p1(this.className); ')

var b14=document.createElement("input");
b14.setAttribute("type","text");
b14.style.width="35px";
b14.style.height="35px";
b14.style.borderRadius="35px";
b14.style.textIndent="9px";
b14.style.border="1px solid grey";
b14.style.backgroundColor="lightgrey";
b14.style.marginTop="15px";
b14.className="b14";
b14.setAttribute("onchange",'p1(this.className); ')

var b15=document.createElement("input");
b15.setAttribute("type","text");
b15.style.width="35px";
b15.style.height="35px";
b15.style.borderRadius="35px";
b15.style.textIndent="9px";
b15.style.border="1px solid grey";
b15.style.backgroundColor="lightgrey";
b15.style.marginTop="15px";
b15.className="b15";
b15.setAttribute("onchange",'p1(this.className); ')

col1.appendChild(b11);
col1.appendChild(b12);
col1.appendChild(b13);
col1.appendChild(b14);
col1.appendChild(b15);
col1.style.display="flex";
col1.style.flexDirection="column"

var col2=document.createElement("div");
col2.style.marginLeft="15px";

var b21=document.createElement("input");
b21.setAttribute("type","text");
b21.style.width="35px";
b21.style.height="35px";
b21.style.borderRadius="35px";
b21.style.textIndent="9px";
b21.style.border="1px solid grey";
b21.style.backgroundColor="lightgrey";
b21.className="b21";
b21.setAttribute("onchange",'p2(this.className); ')

var b22=document.createElement("input");
b22.setAttribute("type","text");
b22.style.width="35px";
b22.style.height="35px";
b22.style.borderRadius="35px";
b22.style.textIndent="9px";
b22.style.border="1px solid grey";
b22.style.backgroundColor="lightgrey";
b22.style.marginTop="15px";
b22.className="b22";
b22.setAttribute("onchange",'p2(this.className); ')

var b23=document.createElement("input");
b23.setAttribute("type","text");
b23.style.width="35px";
b23.style.height="35px";
b23.style.borderRadius="35px";
b23.style.textIndent="9px";
b23.style.border="1px solid grey";
b23.style.backgroundColor="lightgrey";
b23.style.marginTop="15px";
b23.className="b23";
b23.setAttribute("onchange",'p2(this.className); ')

var b24=document.createElement("input");
b24.setAttribute("type","text");
b24.style.width="35px";
b24.style.height="35px";
b24.style.borderRadius="35px";
b24.style.textIndent="9px";
b24.style.border="1px solid grey";
b24.style.backgroundColor="lightgrey";
b24.style.marginTop="15px";
b24.className="b24";
b24.setAttribute("onchange",'p2(this.className); ')

var b25=document.createElement("input");
b25.setAttribute("type","text");
b25.style.width="35px";
b25.style.height="35px";
b25.style.borderRadius="35px";
b25.style.textIndent="9px";
b25.style.border="1px solid grey";
b25.style.backgroundColor="lightgrey";
b25.style.marginTop="15px";
b25.className="b25";
b25.setAttribute("onchange",'p2(this.className); ')

col2.appendChild(b21);
col2.appendChild(b22);
col2.appendChild(b23);
col2.appendChild(b24);
col2.appendChild(b25);
col2.style.display="flex";
col2.style.flexDirection="column"

var col3=document.createElement("div");
col3.style.marginLeft="15px";
var b31=document.createElement("input");
b31.setAttribute("type","text");
b31.style.width="35px";
b31.style.height="35px";
b31.style.borderRadius="35px";
b31.style.textIndent="9px";
b31.style.border="1px solid grey";
b31.style.backgroundColor="lightgrey";
b31.className="b31"
b31.setAttribute("onchange",'p3(this.className); ')

var b32=document.createElement("input");
b32.setAttribute("type","text");
b32.style.width="35px";
b32.style.height="35px";
b32.style.borderRadius="35px";
b32.style.textIndent="9px";
b32.style.border="1px solid grey";
b32.style.backgroundColor="lightgrey";
b32.style.marginTop="15px";
b32.className="b32";
b32.setAttribute("onchange",'p3(this.className); ')

var b33=document.createElement("input");
b33.setAttribute("type","text");
b33.style.width="35px";
b33.style.height="35px";
b33.style.borderRadius="35px";
b33.style.textIndent="9px";
b33.style.border="1px solid grey";
b33.style.backgroundColor="lightgrey";
b33.style.marginTop="15px";
b33.className="b33";
b33.setAttribute("onchange",'p3(this.className); ')

var b34=document.createElement("input");
b34.setAttribute("type","text");
b34.style.width="35px";
b34.style.height="35px";
b34.style.borderRadius="35px";
b34.style.textIndent="9px";
b34.style.border="1px solid grey";
b34.style.backgroundColor="lightgrey";
b34.style.marginTop="15px";
b34.className="b34";
b34.setAttribute("onchange",'p3(this.className); ')

var b35=document.createElement("input");
b35.setAttribute("type","text");
b35.style.width="35px";
b35.style.height="35px";
b35.style.borderRadius="35px";
b35.style.textIndent="9px";
b35.style.border="1px solid grey";
b35.style.backgroundColor="lightgrey";
b35.style.marginTop="15px";
b35.className="b35";
b35.setAttribute("onchange",'p3(this.className); ')

col3.appendChild(b31);
col3.appendChild(b32);
col3.appendChild(b33);
col3.appendChild(b34);
col3.appendChild(b35);
col3.style.display="flex";
col3.style.flexDirection="column";


var col4=document.createElement("div");
col4.style.marginLeft="15px";

var b41=document.createElement("input");
b41.setAttribute("type","text");
b41.style.width="35px";
b41.style.height="35px";
b41.style.borderRadius="35px";
b41.style.textIndent="9px";
b41.style.border="1px solid grey";
b41.style.backgroundColor="lightgrey";
b41.className="b41"
b41.setAttribute("onchange",'p4(this.className); ')

var b42=document.createElement("input");
b42.setAttribute("type","text");
b42.style.width="35px";
b42.style.height="35px";
b42.style.borderRadius="35px";
b42.style.textIndent="9px";
b42.style.border="1px solid grey";
b42.style.backgroundColor="lightgrey";
b42.style.marginTop="15px";
b42.className="b42"
b42.setAttribute("onchange",'p4(this.className); ')


var b43=document.createElement("input");
b43.setAttribute("type","text");
b43.style.width="35px";
b43.style.height="35px";
b43.style.borderRadius="35px";
b43.style.textIndent="9px";
b43.style.border="1px solid grey";
b43.style.backgroundColor="lightgrey";
b43.style.marginTop="15px";
b43.className="b43"
b43.setAttribute("onchange",'p4(this.className); ')


var b44=document.createElement("input");
b44.setAttribute("type","text");
b44.style.width="35px";
b44.style.height="35px";
b44.style.borderRadius="35px";
b44.style.textIndent="9px";
b44.className="b44";
b44.style.border="1px solid grey";
b44.style.backgroundColor="lightgrey";
b44.style.marginTop="15px";
b44.setAttribute("onchange",'p4(this.className); ')


var b45=document.createElement("input");
b45.setAttribute("type","text");
b45.style.width="35px";
b45.style.height="35px";
b45.style.borderRadius="35px";
b45.style.textIndent="9px";
b45.style.border="1px solid grey";
b45.style.backgroundColor="lightgrey";
b45.style.marginTop="15px";
b45.className="b45"
b45.setAttribute("onchange",'p4(this.className); ')


col4.appendChild(b41);
col4.appendChild(b42);
col4.appendChild(b43);
col4.appendChild(b44);
col4.appendChild(b45);
col4.style.display="flex";
col4.style.flexDirection="column";

row1.appendChild(col1);
row1.appendChild(col2);
row1.appendChild(col3);
row1.appendChild(col4);
row1.style.display="none";

maindiv.appendChild(start);
maindiv.appendChild(score);
maindiv.appendChild(row1);

document.body.appendChild(maindiv);
