//Запись начального состояния пятнашек , для возбновления в случае неразрешаемой комбинации 
function memory(){
	if(memoryArr.length < num.length){
		for(let i = 0; i < num.length ; i++){
			memoryArr.push(num[i].innerHTML);
		}
	};
};
//Возвращение пятнашек в начальное состояние 
function activeMemory(){
	for(let i = 0; i < num.length ; i++){
		num[i].innerHTML = memoryArr[i];
	}
}
//Запуск перемешивания пятнашек
randomElemBot.onclick = function(){
		//Записываем начало
		memory();
		//Случайные позиции
		randomPosition();
}
//ФУНКЦИЯ ПЕРЕМЕШИВАНИЯ раставляем числа по порядку путем случайной позиции в колекции класа микс после проставки числа убираем атрибут класс микс и проставляем в случайном порядке дальше
function randomPosition(){
	//Убираем кнопку
	randomElemBot.style.display = "none";
	for(let i = 1; i <= 8 ; i++){
		let mix = document.getElementsByClassName("mix");
		mix[randomNum(0,mix.length-1)].setAttribute("class","elem metka");
		let metka = document.getElementsByClassName("metka");
		metka[0].innerHTML=i;
		metka[0].setAttribute("class","elem num");
	}
	//Проверка на плохую комбинацию
	errorPosition();
};
//Функция проверки плохой комбинации Берем число по порядку через цыкл и пропускаем через второй цыкл всех чисел и ищем количество чисел которые дальше по порядку меньше и записываем в мини каунт далее сумируем мини каунь в каунт Алл и если число алл Каунт не четное то комбинация ошибочная
function errorPosition(){
	let countAll = 0;
	let countMini = 0; 
	for(let i = 0; i < num.length ; i++){
		for(let j = i ; j < num.length ; j++){
			if(num[i].innerHTML > num[j].innerHTML){
				countMini++;
			}
		}
		countAll += countMini;
		countMini = 0;
	};
	if(countAll%2 != 0){
		console.log("Неправильная растановка");
		activeMemory();
		for(let i = 0 ; i < num.length-1 ; i++ ){
			num[i].setAttribute("class","elem num mix");
		}
		randomPosition();
	};
};
//Случайные числа
function randomNum(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//функция Проверка выигрыша 
function win(){
	let k = 0;
	for(let i = 1; i < num.length ; i++){
		if(i == Number(num[i-1].innerHTML)){
			k++;
		};
	};
	return k;
};
//Запуск авто игры
autoGame.onclick = function(){
	start();
};

function start(){
	let interval = setInterval(move,30);
	let j = 1;
	stopBot.onclick = function(){
		clearInterval(interval);
	}
	function move(){
			if(snake1.getNum(9) != 8){
				console.log(snake1.getFalseCircle());
			}else if(snake1.getNum(9) == 7){
		   		snake1["Все"][0].click();
		 	}else{
		  		snake1["Все"][snake1.getNum(9)+1].click();
		 	}
};
	class Snake{
	constructor(one,two,three,four,five,six,seven,eight,home){
		this["Все"] = [one,two,three,four,five,six,seven,eight,home];
		this["Порядок"] = [1,2,3,5,6,8,7,4];
		this["Порядок2"] = [1,4,7,8,6,5,3,2];
	}
	
	getFalseCircle(){
		let arr = this["Порядок"];
		for(let i = 0; i < arr.length ; i++){
			if(this.getNextCircle(arr[i],arr[i+1],9)){
				return arr[i];
			}
		}
	}
	getNextCircle(one,two,three){
		let elemOne = Number(this.getNum(one));
		let elemTwo = Number(this.getNum(two));
		let elemTwo = Number(this.getNum(two));
		if( elemOne+1 != elemTwo || elemOne == 0 && elemTwo == ){
			return true;
		}
	}


	goCircle(num){
		let one = this["Порядок"].indexOf(num);
		let two = this["Порядок2"].indexOf(num);
		let needOne = this["Порядок"].indexOf(this.getFalse());
		let needTwo = this["Порядок2"].indexOf(this.getFalse2());
		if(one < two){
			console.log("Порядок 1");
			return 1;
		}else if(two < one){
			console.log("Порядок 2");
			return 2;
		}else if(needOne > needTwo){
			console.log("Порядок 3");
			return 1;
		}else if(needOne < needTwo && num != 6){
			console.log("Порядок 4");
			return 2;
		}else{
			console.log("Порядок 5");
			return 2;
		}
		
	}
	allCorner(num){
		
		let elem = Number(this.getNum(num));
		if(elem == 1 || elem == 3 || elem == 5 || elem == 7){
			
			return true;
		}else{
			
			return false;
		}
		
	}
	getNum = function(num){
		for(let i = 0; i < this["Все"].length;i++){
			if(num == this["Все"][i].innerHTML){
				return i;
			}
		}
	}
	getNow(arr1){
		
		let arr = this["Порядок"];
		let fals = this.getFalse();
		
		let now = arr[arr.indexOf(fals)-1];
		
		return now;
	}
	getNow2(arr1){
		
		let arr = this["Порядок2"];
		let fals = this.getFalse2();
		
		let now = arr[arr.indexOf(fals)-1];
		
		return now;
	}
	getPlus(num){
		
		let elem = this.getNum(num);
		if(elem == 0 || elem == 2 || elem == 4 || elem == 6){
			
			return true;
		}else{
			
			return false;
		}
		
	}
	getFalse(arr1){
		let arr = this["Порядок"];
		for(let i = 0; i < arr.length ; i++){
			if(this.getNext(arr[i],arr[i+1])){
				return arr[i+1];
			}
		}
	}
	getFalse2(arr1){
		
		let arr = this["Порядок2"];
		for(let i = 0; i < arr.length ; i++){
			if(this.getNext2(arr[i],arr[i+1])){
				
				return arr[i+1];
			}
		}
		
	}
	getNext(one,two){
		
		let elemOne = Number(this.getNum(one));
		let elemTwo = Number(this.getNum(two));
		if(elemOne+1 == this.getNum(9) && elemOne+2 == elemTwo){
			
			return false;
		}else if(elemOne+1 == this.getNum(9) && this.getNum(9) == 7 && elemTwo == 0){
			
			return false;
		}else if(elemOne+1 == elemTwo && elemOne !=7){
			
			return false;
		}else if(elemOne == 7 && elemTwo == 0){
			
			return false;
		}else if(elemOne == 7 && elemTwo == 0){
			
			return false;
		}else if(elemOne == 7 && elemTwo != 0){
			
			return true;
		}else if(elemOne+1 != elemTwo){
			
			return true;
		}
		
	}
	getNext2(one,two){
	
		let elemOne = Number(this.getNum(one));
		let elemTwo = Number(this.getNum(two));
		if(elemOne-1 == this.getNum(9) && elemOne-2 == elemTwo){
			
			return false;
		}else if(elemOne+1 == this.getNum(9) && this.getNum(9) == 7 && elemTwo == 0){
			
			return false;
		}else if(elemOne+1 == elemTwo && elemOne !=7){
			
			return false;
		}else if(elemOne == 7 && elemTwo == 0){
			
			return false;
		}else if(elemOne == 7 && elemTwo == 0){
		
			return false;
		}else if(elemOne == 0 && elemTwo != 7){
			
			return true;
		}else if(elemOne-1 != elemTwo){
		
			return true;
		}
		
	}

}
let snake1 = new Snake(num[5],num[8],num[7],num[6],num[3],num[0],num[1],num[2],num[4]);
}
