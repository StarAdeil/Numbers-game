let pult = document.getElementById("pult");
let cirlce = document.getElementById("circle");
let glassElem = document.getElementsByClassName("glass");
let life = document.getElementById("life");
life.style.width = "300px";
let x = 0;
let y = 0;
let flag = 0;
let error = 0;
cirlce.innerHTML = randomNum(1,99);
glassElem[0].onclick = function(){
	if(simple(cirlce.innerHTML)	==	1){
		flag++;
		if(flag == 1){
			let intervalLeft = setInterval(left,20);
			function left(){
				if(pult.style.transform != "rotate(-80deg)"){
					pult.style.transform = `rotate(${x--}deg)`;
					cirlce.style.transform = `rotate(${y++}deg)`;
				}else{
					clearInterval(intervalLeft);
					pult.style.transform = `rotate(0deg)`;
					cirlce.style.transform = `rotate(0deg)`;
					x = 0;
					y =0;
					flag=0;
					cirlce.innerHTML = randomNum(1,99);
				};
			};
		};
	}else{
		error++;
		let lifeInterval = setInterval(lifeFunc,20);
		if(error==3){
			document.body.innerHTML = "КОНЕЦ ИГРЫ";
		}else{
			cirlce.innerHTML = randomNum(1,99);
		}
	}
};
glassElem[1].onclick = function(){
	if(cirlce.innerHTML%2 == 0){
		flag++;

		if(flag == 1){
			let intervalCenter = setInterval(Center,5);
			function Center(){
				if(pult.style.transform != "translateY(350px)"){
				pult.style.transform =`translateY(${x++}px)`;
				}else{
				clearInterval(intervalCenter);
				pult.style.transform =`translateY(0px)`;
				x = 0;
				y =0;
				flag=0;
				cirlce.innerHTML = randomNum(1,99);
				};
			};
		};
	}else{
		error++;
		let lifeInterval = setInterval(lifeFunc,20);
		if(error==3){
			document.body.innerHTML = "КОНЕЦ ИГРЫ";
		}else{
		cirlce.innerHTML = randomNum(1,99);
		};
	}
}
glassElem[2].onclick = function(){
	if(cirlce.innerHTML%2 != 0 && simple(circle.innerHTML) >1){
		flag++;
		if(flag == 1){
			let intervalRight = setInterval(right,20);
			function right(){
				if(pult.style.transform != "rotate(80deg)"){
					pult.style.transform = `rotate(${x++}deg)`;
					cirlce.style.transform = `rotate(${y--}deg)`;
				}else{
					clearInterval(intervalRight);
					pult.style.transform = `rotate(0deg)`;
					cirlce.style.transform = `rotate(0deg)`;
					x = 0;
					y =0;
					flag = 0;
					cirlce.innerHTML = randomNum(1,99);
				};
			};
		};
	}else{
		error++;
		let lifeInterval = setInterval(lifeFunc,20);
		if(error==3){
			document.body.innerHTML = "КОНЕЦ ИГРЫ";
		}else{
		cirlce.innerHTML = randomNum(1,99);
		};
	}
};

function randomNum(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function simple(num){
let x = 0;
if(x==4){
	x++;
}
	for(let i = 0; i < Math.ceil(num/2) ; i++){
		if(num%i == 0){
			x++
		}
	}
	return x;
}
function lifeFunc(){
	if(error == 1 && parseInt(life.style.width) > parseInt("200px")){
		life.style.width = (parseInt(life.style.width)-1)+"px";
	}else if(error == 2 && parseInt(life.style.width) > parseInt("100px")){
		life.style.width = (parseInt(life.style.width)-1)+"px";
	}else{
		clearInterval(lifeInterval);
	}
}