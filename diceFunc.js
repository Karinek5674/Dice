//jednotlive kostky
let kostka1 = 0;
let kostka2 = 0;
let kostka3 = 0;
let kostka4 = 0;
let kostka5 = 0;
let kostka6 = 0;

//fotky kostek
const dicePic1 = "<img src=./dices/1.svg>";
const dicePic2 = "<img src=./dices/2.svg>";
const dicePic3 = "<img src=./dices/3.svg>";
const dicePic4 = "<img src=./dices/4.svg>";
const dicePic5 = "<img src=./dices/5.svg>";
const dicePic6 = "<img src=./dices/6.svg>";

//kostkove divy
div0 = document.querySelector('.kostka1');
div1 = document.querySelector('.kostka2');
div2 = document.querySelector('.kostka3');
div3 = document.querySelector('.kostka4');
div4 = document.querySelector('.kostka5');
div5 = document.querySelector('.kostka6');

//array obsahujici kostky, do ktere se pak budou hodnoty prirazovat a z ni brat 
const kostky = [kostka1, kostka2, kostka3, kostka4, kostka5, kostka6]

//funkce generující číslo od 1 do 6 na random
function randomDice() { 
	return Math.floor(Math.random() * 6) + 1
}

//funkce, ktera kazde kostce v arrayi priradi hodnotu 1 - 6 
function priradHodnotuKostkam() { 
	for (let i = 0; i < kostky.length; i++) {
		kostky[i] = randomDice()
	}
}

//Tlačítko na hod kostkami, priradi hodnotu kostkam a dle nich šsi pak hrac vybere 
let hracuvTah = false;
let numDivu = 0;
const divs = [div0, div1, div2, div3, div4, div5]

const rollButton = document.querySelector('.js-roll')
rollButton.addEventListener('click', () => {
	hracuvTah = true;
	priradHodnotuKostkam();
	numDivu++;
	console.log(kostky) //array s kostkama
	let i = 0;
	kostky.forEach(kostka => {
		console.log(divs[i]);
		switch(kostka){
			case kostka = 1:
				divs[i].innerHTML = dicePic1;
				break;
			case kostka = 2:
				divs[i].innerHTML = dicePic2;
				break;
			case kostka = 3:
				divs[i].innerHTML = dicePic3;
				break;
			case kostka = 4:
				divs[i].innerHTML = dicePic4;
				break;
			case kostka = 5:
				divs[i].innerHTML = dicePic5;
				break;
			case kostka = 6:
				divs[i].innerHTML = dicePic6;
				break;
		}
		i++;
	})		
})