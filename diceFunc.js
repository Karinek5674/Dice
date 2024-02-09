import { hodnotaKostek } from "./hodnotaKostek.js";

//jednotlive kostky
let kostka1 = 0;
let kostka2 = 0;
let kostka3 = 0;
let kostka4 = 0;
let kostka5 = 0;
let kostka6 = 0;

//selected kostky ze kterých pak bdue vycházet to porovnávání a výpočet bodů
let kostka1Selected = 0;
let kostka2Selected = 0;
let kostka3Selected = 0;
let kostka4Selected = 0;
let kostka5Selected = 0;
let kostka6Selected = 0;

//score hrace
let scoreHrace = 0;

//fotky kostek
const dicePic1 = `<img class="dice1 selectableDice" data-value="1" src="./dices/1.svg">`;
const dicePic2 = `<img class="dice2 selectableDice" data-value="2" src="./dices/2.svg">`;
const dicePic3 = `<img class="dice3 selectableDice" data-value="3" src="./dices/3.svg">`;
const dicePic4 = `<img class="dice4 selectableDice" data-value="4" src="./dices/4.svg">`;
const dicePic5 = `<img class="dice5 selectableDice" data-value="5" src="./dices/5.svg">`;
const dicePic6 = `<img class="dice6 selectableDice" data-value="6" src="./dices/6.svg">`;


//kostkove divy
const div0 = document.querySelector('.kostka1');
const div1 = document.querySelector('.kostka2');
const div2 = document.querySelector('.kostka3');
const div3 = document.querySelector('.kostka4');
const div4 = document.querySelector('.kostka5');
const div5 = document.querySelector('.kostka6');

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
const divs = [div0, div1, div2, div3, div4, div5];
let selectedDices = []; //array tech zakliknutych kostek

const rollButton = document.querySelector('.js-roll')
rollButton.addEventListener('click', () => {
	if (hracuvTah == false) {
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
		//Selectování kostek a jejich hodnoty 
		document.querySelectorAll('.selectableDice').forEach((kostka) => {
			kostka.addEventListener('click', () => {
				let valueKostky = kostka.dataset.value; //TOHLE JE VALUE TE KOSTKY
				if (kostka.classList.contains('selectedDice') == false) {
					kostka.classList.add('selectedDice');
					selectedDices.push(valueKostky); // do arraye mi to hodí ten value kliknuté kostky 
					console.log(selectedDices);
				} else {
					//console.log(valueKostky); //value kostky, kterou jsem klikl
					for (let i = 0; i < selectedDices.length; i++) {
						console.log(selectedDices[i]); //pokud se hodnota na indexu bude rovnat nejake te kostce, tak to ten index vyjebe
							if (selectedDices[i] == valueKostky) {
								//console.log(selectedDices[i])
								selectedDices.splice(i, 1);
								break;
							}
					}
					console.log(selectedDices);
					kostka.classList.remove('selectedDice');
				}
			})
		})
		} else {
			alert('You already rolled, score and you can roll again.')
		}
})

//continue tlačítko 
document.querySelector('.js-continue').addEventListener('click', () => {
	//tady bude funkce toho continue tlačítka
})