import {maxPoints} from "./functions.js";
//maxPoints();

//fotky kostek
const dicePic1 = `<img class="dice1 selectableDice" data-value="1" src="./dices/1.svg">`;
const dicePic2 = `<img class="dice2 selectableDice" data-value="2" src="./dices/2.svg">`;
const dicePic3 = `<img class="dice3 selectableDice" data-value="3" src="./dices/3.svg">`;
const dicePic4 = `<img class="dice4 selectableDice" data-value="4" src="./dices/4.svg">`;
const dicePic5 = `<img class="dice5 selectableDice" data-value="5" src="./dices/5.svg">`;
const dicePic6 = `<img class="dice6 selectableDice" data-value="6" src="./dices/6.svg">`;

//selected kostky ze kterých pak bdue vycházet to porovnávání a výpočet bodů
let kostka1Selected = 0;
let kostka2Selected = 0;
let kostka3Selected = 0;
let kostka4Selected = 0;
let kostka5Selected = 0;
let kostka6Selected = 0;

//jednotlive kostky
let kostka1 = 0;
let kostka2 = 0;
let kostka3 = 0;
let kostka4 = 0;
let kostka5 = 0;
let kostka6 = 0;

//ta promenna ktera urcuje, kolik kostek se vygeneruje 
let generujKostek = 6;

function generujKostkyAJejichFunkce() {
	emptyDivs();
	resetPoctyKostek();
	selectedDices = [];
	hracuvTah1 = true;
	priradHodnotuKostkam();
	console.log(kostky) //array s hodnotou kostek
	let i = 0;
	kostky.forEach(kostka => {
		console.log(divs[i]);
		switch(kostka){
			case 1:
				divs[i].innerHTML = dicePic1;
				kostka1Selected++;
				break;
			case 2:
				divs[i].innerHTML = dicePic2;
				kostka2Selected++;
				break;
			case 3:
				divs[i].innerHTML = dicePic3;
				kostka3Selected++;
				break;
			case 4:
				divs[i].innerHTML = dicePic4;
				kostka4Selected++;
				break;
			case 5:
				divs[i].innerHTML = dicePic5;
				kostka5Selected++;
				break;
			case 6:
				divs[i].innerHTML = dicePic6;
				kostka6Selected++;
				break;
			default: 
				divs[i].innerHTML = '';
				break;
		}
		i++;
	})
	console.log(kostka1Selected, kostka2Selected, kostka3Selected, kostka4Selected, kostka5Selected, kostka6Selected); 
	//zde bude podminka na tu kontrolu kostek
	checkSmula();
	//Selectování kostek a jejich hodnoty 
	document.querySelectorAll('.selectableDice').forEach((kostka) => {
		kostka.addEventListener('click', () => {
			let valueKostky = kostka.dataset.value; //TOHLE JE VALUE TE KOSTKY
			if (kostka.classList.contains('selectedDice') == false) {
				kostka1Selected = 0;
				kostka2Selected = 0;
				kostka3Selected = 0;
				kostka4Selected = 0;
				kostka5Selected = 0;
				kostka6Selected = 0;
				kostka.classList.add('selectedDice');
				selectedDices.push(valueKostky);// do arraye mi to hodí ten value kliknuté kostky 
				numberOfSelectedDices++; 
				//POČÍTANÍ SCORE HRÁČE
				console.log(selectedDices) //array selectnutých kostek
				selectedDices.forEach(kostka => {
					switch(kostka){
						case '1':
							kostka1Selected++;
							break;
						case '2':
							kostka2Selected++;
							break;
						case '3':
							kostka3Selected++;
							break;
						case '4':
							kostka4Selected++;
							break;
						case '5':
							kostka5Selected++;
							break;
						case '6':
							kostka6Selected++;
							break;
					}
				})
					countPoints();
			} else { //DESELECTOVÁNÍ KOSTEK
				switch(valueKostky) {
					case '1':
						kostka1Selected--;
						break;
					case '2':
						kostka2Selected--;
						break;
					case '3':
						kostka3Selected--;
						break;
					case '4':
						kostka4Selected--;
						break;
					case '5':
						kostka5Selected--;
						break;
					case '6':
						kostka6Selected--;
						break;
				}	
				//console.log(valueKostky); //value kostky, kterou jsem klikl
				for (let i = 0; i < selectedDices.length; i++) {
						if (selectedDices[i] == valueKostky) {
							selectedDices.splice(i, 1);
							break;
						}
				}
				console.log(selectedDices);
				kostka.classList.remove('selectedDice');
				numberOfSelectedDices--;
				countPoints();
			}
		})
	})
}

function generujKostkyAJejichFunkce2() {
	emptyDivs2();
	resetPoctyKostek();
	selectedDices = [];
	hracuvTah2 = true;
	priradHodnotuKostkam();
	console.log(kostky) //array s hodnotou kostek
	let i = 0;
	kostky.forEach(kostka => {
		console.log(divs2[i]);
		switch(kostka){
			case 1:
				divs2[i].innerHTML = dicePic1;
				kostka1Selected++;
				break;
			case 2:
				divs2[i].innerHTML = dicePic2;
				kostka2Selected++;
				break;
			case 3:
				divs2[i].innerHTML = dicePic3;
				kostka3Selected++;
				break;
			case 4:
				divs2[i].innerHTML = dicePic4;
				kostka4Selected++;
				break;
			case 5:
				divs2[i].innerHTML = dicePic5;
				kostka5Selected++;
				break;
			case 6:
				divs2[i].innerHTML = dicePic6;
				kostka6Selected++;
				break;
			default: 
				divs2[i].innerHTML = '';
				break;
		}
		i++;
	})
	console.log(kostka1Selected, kostka2Selected, kostka3Selected, kostka4Selected, kostka5Selected, kostka6Selected); 
	//zde bude podminka na tu kontrolu kostek
	checkSmula();
	//Selectování kostek a jejich hodnoty 
	document.querySelectorAll('.selectableDice').forEach((kostka) => {
		kostka.addEventListener('click', () => {
			let valueKostky = kostka.dataset.value; //TOHLE JE VALUE TE KOSTKY
			if (kostka.classList.contains('selectedDice') == false) {
				kostka1Selected = 0;
				kostka2Selected = 0;
				kostka3Selected = 0;
				kostka4Selected = 0;
				kostka5Selected = 0;
				kostka6Selected = 0;
				kostka.classList.add('selectedDice');
				selectedDices.push(valueKostky);// do arraye mi to hodí ten value kliknuté kostky 
				numberOfSelectedDices++; 
				//POČÍTANÍ SCORE HRÁČE
				console.log(selectedDices) //array selectnutých kostek
				selectedDices.forEach(kostka => {
					switch(kostka){
						case '1':
							kostka1Selected++;
							break;
						case '2':
							kostka2Selected++;
							break;
						case '3':
							kostka3Selected++;
							break;
						case '4':
							kostka4Selected++;
							break;
						case '5':
							kostka5Selected++;
							break;
						case '6':
							kostka6Selected++;
							break;
					}
				})
					countPoints2();
			} else { //DESELECTOVÁNÍ KOSTEK
				switch(valueKostky) {
					case '1':
						kostka1Selected--;
						break;
					case '2':
						kostka2Selected--;
						break;
					case '3':
						kostka3Selected--;
						break;
					case '4':
						kostka4Selected--;
						break;
					case '5':
						kostka5Selected--;
						break;
					case '6':
						kostka6Selected--;
						break;
				}	
				//console.log(valueKostky); //value kostky, kterou jsem klikl
				for (let i = 0; i < selectedDices.length; i++) {
						if (selectedDices[i] == valueKostky) {
							selectedDices.splice(i, 1);
							break;
						}
				}
				console.log(selectedDices);
				kostka.classList.remove('selectedDice');
				numberOfSelectedDices--;
				countPoints2();
			}
		})
	})
}

//kostkove divy
const div0 = document.querySelector('.kostka1');
const div1 = document.querySelector('.kostka2');
const div2 = document.querySelector('.kostka3');
const div3 = document.querySelector('.kostka4');
const div4 = document.querySelector('.kostka5');
const div5 = document.querySelector('.kostka6');
//kostkove divy2
const div02 = document.querySelector('.kostka12');
const div12 = document.querySelector('.kostka22');
const div22 = document.querySelector('.kostka32');
const div32 = document.querySelector('.kostka42');
const div42 = document.querySelector('.kostka52');
const div52 = document.querySelector('.kostka62');
//divs
const divs = [div0, div1, div2, div3, div4, div5];
//divs2
const divs2 = [div02, div12, div22, div32, div42, div52]

//array obsahujici kostky, do ktere se pak budou hodnoty prirazovat a z ni brat 
let kostky = [kostka1, kostka2, kostka3, kostka4, kostka5, kostka6]

//funkce, ktera kazde kostce v arrayi priradi hodnotu 1 - 6 
function priradHodnotuKostkam() { 
	for (let i = 0; i < generujKostek; i++) {
		kostky[i] = randomDice()
	}
}

//funkce generující číslo od 1 do 6 na random
function randomDice() {
	return Math.floor(Math.random() * 6) + 1
}

//Tlačítko na hod kostkami, priradi hodnotu kostkam a dle nich šsi pak hrac vybere 
let hracuvTah1 = false;
let hracuvTah2 = false;
let selectedDices = []; //array tech zakliknutych kostek
let numberOfSelectedDices = 0;

const rollButton = document.querySelector('.js-roll')
rollButton.addEventListener('click', () => {
	if (hracuvTah1 == true) {
		alert('You already rolled, you cannot roll again.')
	} else if (hracuvTah2 == false) {
		generujKostkyAJejichFunkce()
	} else {
		alert('Wait for the other player to finish their game.')
	}
})

const rollButton2 = document.querySelector('.js-roll2')
rollButton2.addEventListener('click', () => {
		if (hracuvTah2 == true) {
			alert('You already rolled, you cannot roll again.')
		} else if (hracuvTah1 == false) {
			generujKostkyAJejichFunkce2()
		} else {
			alert('Wait for the other player to finish their game.')
		}
})

//CONTINUE tlačítko 
document.querySelector('.js-continue').addEventListener('click', () => {
	if (selectedScore == 0) {
		alert('Select dices with value to continue round.');
	} else if (numberOfSelectedDices < 6) {
		kostky = [];
		roundScore += selectedScore;
		selectedScore = 0;
		roundScoreHTML.innerHTML = roundScore;
		selectedScoreHTML.innerHTML = selectedScore;
		console.log(generujKostek);
		generujKostek -= numberOfSelectedDices;
		generujKostkyAJejichFunkce();
	} else if (numberOfSelectedDices == 6) {
		roundScore += selectedScore;
		selectedScore = 0;
		roundScoreHTML.innerHTML = roundScore;
		selectedScoreHTML.innerHTML = selectedScore;
		numberOfSelectedDices = 0;
		generujKostek = 6;
		generujKostkyAJejichFunkce();
	}
})
//CONTINUE tlačítko2
document.querySelector('.js-continue2').addEventListener('click', () => {
	if (selectedScore2 == 0) {
		alert('Select dices with value to continue round.');
	} else if (numberOfSelectedDices < 6) {
		kostky = [];
		roundScore2 += selectedScore2;
		selectedScore2 = 0;
		roundScoreHTML2.innerHTML = roundScore2;
		selectedScoreHTML2.innerHTML = selectedScore2;
		generujKostek -= numberOfSelectedDices;
		generujKostkyAJejichFunkce2();
	} else if (numberOfSelectedDices == 6) {
		roundScore2 += selectedScore2;
		selectedScore2 = 0;
		roundScoreHTML2.innerHTML = roundScore2;
		selectedScoreHTML2.innerHTML = selectedScore2;
		numberOfSelectedDices = 0;
		generujKostek = 6;
		generujKostkyAJejichFunkce2();
	}
})

//END tlačítko
document.querySelector('.js-end-round').addEventListener('click', () => {
	if (selectedScore == 0) {
		alert('Select dices with value to end round.');
	} else {
		totalScore = totalScore + selectedScore + roundScore;
		selectedScore = 0;
		roundScore = 0; 
		//Update HTML
		totalScoreHTML.innerHTML = totalScore;
		roundScoreHTML.innerHTML = roundScore;
		selectedScoreHTML.innerHTML = selectedScore;
		resetPoctyKostek();
		resetDivs();
		numberOfSelectedDices = 0;
		hracuvTah1 = false;
		checkVyhra();
	}
})
//END tlačítko2
document.querySelector('.js-end-round2').addEventListener('click', () => {
	if (selectedScore2 == 0) {
		alert('Select dices with value to end round.');
	} else {
		totalScore2 = totalScore2 + selectedScore2 + roundScore2;
		selectedScore2 = 0;
		roundScore2 = 0; 
		//Update HTML
		totalScoreHTML2.innerHTML = totalScore2;
		roundScoreHTML2.innerHTML = roundScore2;
		selectedScoreHTML2.innerHTML = selectedScore2;
		resetPoctyKostek();
		resetDivs2();
		numberOfSelectedDices = 0;
		hracuvTah2 = false;
		checkVyhra();
	}
})

//score hrace
let totalScore = 0;
let totalScore2 = 0;
let selectedScore = 0;
let selectedScore2 = 0;
let meziScore = 0;
let meziScore2 = 0;
let roundScore = 0;
let roundScore2 = 0;

const totalScoreHTML = document.querySelector('.js-total-score');
const totalScoreHTML2 = document.querySelector('.js-total-score2');

const selectedScoreHTML = document.querySelector('.js-selected');
const selectedScoreHTML2 = document.querySelector('.js-selected2');

const roundScoreHTML = document.querySelector('.js-def-score');
const roundScoreHTML2 = document.querySelector('.js-def-score2');

function emptyDivs() {
	div0.innerHTML = '';
	div1.innerHTML = '';
	div2.innerHTML = '';
	div3.innerHTML = '';
	div4.innerHTML = '';
	div5.innerHTML = '';
}

function emptyDivs2() {
	div02.innerHTML = '';
	div12.innerHTML = '';
	div22.innerHTML = '';
	div32.innerHTML = '';
	div42.innerHTML = '';
	div52.innerHTML = '';
}

function resetDivs() {
	div0.innerHTML = '<img src="./dices/empty.svg">';
	div1.innerHTML = '<img src="./dices/empty.svg">';
	div2.innerHTML = '<img src="./dices/empty.svg">';
	div3.innerHTML = '<img src="./dices/empty.svg">';
	div4.innerHTML = '<img src="./dices/empty.svg">';
	div5.innerHTML = '<img src="./dices/empty.svg">';
}

function resetDivs2() {
	div02.innerHTML = '<img src="./dices/empty.svg">';
	div12.innerHTML = '<img src="./dices/empty.svg">';
	div22.innerHTML = '<img src="./dices/empty.svg">';
	div32.innerHTML = '<img src="./dices/empty.svg">';
	div42.innerHTML = '<img src="./dices/empty.svg">';
	div52.innerHTML = '<img src="./dices/empty.svg">';
}

//VÝPOČET BODŮ
function countPoints() {
	generujKostek = 6;
	selectedScore = 0;
	meziScore = 0;
	if (kostka1Selected > 0) {
			switch (kostka1Selected) {
					case 1:
							meziScore = 100;
							break;
					case 2:
							meziScore = 200;
							break;
					case 3:
							meziScore = 1000;
							break;
					case 4:
							meziScore = 2000;
							break;
					case 5:
							meziScore = 4000;
							break;
					case 6:
							meziScore = 8000;
							break;
			}
			selectedScore = selectedScore + meziScore;
	}

	if (kostka2Selected > 0 && kostka2Selected <= 2) {
			selectedScore = selectedScore;
			meziScore = 0;
	} else if (kostka2Selected > 2) {
			switch (kostka2Selected) {
					case 3:
							meziScore = 200;
							break;
					case 4:
							meziScore = 400;
							break;
					case 5:
							meziScore = 800;
							break;
					case 6:
							meziScore = 1600;
							break;
			}
			selectedScore = selectedScore + meziScore;
	}

	if (kostka3Selected > 0 && kostka3Selected <= 2) {
			selectedScore = selectedScore;
			meziScore = 0;
	} else if (kostka3Selected > 2) {
			switch (kostka3Selected) {
					case 3:
							meziScore = 300;
							break;
					case 4:
							meziScore = 600;
							break;
					case 5:
							meziScore = 1200;
							break;
					case 6:
							meziScore = 2400;
							break;
			}
			selectedScore = selectedScore + meziScore;
	}

	if (kostka4Selected > 0 && kostka4Selected <= 2) {
			selectedScore = selectedScore;
			meziScore = 0;
	} else if (kostka4Selected > 2) {
			switch (kostka4Selected) {
					case 3:
							meziScore = 400;
							break;
					case 4:
							meziScore = 800;
							break;
					case 5:
							meziScore = 1600;
							break;
					case 6:
							meziScore = 3200;
							break;
			}
			selectedScore = selectedScore + meziScore;
	}

	if (kostka5Selected > 0) {
			selectedScore = selectedScore;
			meziScore = 0;
			switch (kostka5Selected) {
					case 1:
							meziScore = 50;
							break;
					case 2:
							meziScore = 100;
							break;
					case 3:
							meziScore = 500;
							break;
					case 4:
							meziScore = 1000;
							break;
					case 5:
							meziScore = 2000;
							break;
					case 6:
							meziScore = 4000;
							break;
			}
			selectedScore = selectedScore + meziScore;
	}

	if (kostka6Selected > 0 && kostka6Selected <= 2) {
			selectedScore = selectedScore;
			meziScore = 0;
	} else if (kostka6Selected > 2) {
			switch (kostka6Selected) {
					case 3:
							meziScore = 600;
							break;
					case 4:
							meziScore = 1200;
							break;
					case 5:
							meziScore = 2400;
							break;
					case 6:
							meziScore = 4800;
							break;
			}
			selectedScore = selectedScore + meziScore;
	}

	if (
			(kostka2Selected > 0 && kostka2Selected < 3) ||
			(kostka3Selected > 0 && kostka3Selected < 3) ||
			(kostka4Selected > 0 && kostka4Selected < 3) ||
			(kostka6Selected > 0 && kostka6Selected < 3)
	) {
			selectedScore = 0;
	}

	if (kostka2Selected == 1 && kostka3Selected == 1 && kostka4Selected == 1 && kostka5Selected == 1 && kostka6Selected == 1) {
		selectedScore = 750;
	}
	
	if (kostka1Selected == 1 && kostka2Selected == 1 && kostka3Selected == 1 && kostka4Selected == 1 && kostka5Selected == 1 && kostka6Selected == 1) {
		selectedScore = 1500
	}
	//update html
	selectedScoreHTML.innerHTML = selectedScore;
	console.log(selectedScore);
}

function countPoints2() {
	generujKostek = 6;
	selectedScore2 = 0;
	meziScore2 = 0;
	if (kostka1Selected > 0) {
			switch (kostka1Selected) {
					case 1:
							meziScore2 = 100;
							break;
					case 2:
							meziScore2 = 200;
							break;
					case 3:
							meziScore2 = 1000;
							break;
					case 4:
							meziScore2 = 2000;
							break;
					case 5:
							meziScore2 = 4000;
							break;
					case 6:
							meziScore2 = 8000;
							break;
			}
			selectedScore2 = selectedScore2 + meziScore2;
	}

	if (kostka2Selected > 0 && kostka2Selected <= 2) {
			selectedScore2 = selectedScore2;
			meziScore2 = 0;
	} else if (kostka2Selected > 2) {
			switch (kostka2Selected) {
					case 3:
							meziScore2 = 200;
							break;
					case 4:
							meziScore2 = 400;
							break;
					case 5:
							meziScore2 = 800;
							break;
					case 6:
							meziScore2 = 1600;
							break;
			}
			selectedScore2 = selectedScore2 + meziScore2;
	}

	if (kostka3Selected > 0 && kostka3Selected <= 2) {
			selectedScore2 = selectedScore2;
			meziScore2 = 0;
	} else if (kostka3Selected > 2) {
			switch (kostka3Selected) {
					case 3:
							meziScore2 = 300;
							break;
					case 4:
							meziScore2 = 600;
							break;
					case 5:
							meziScore2 = 1200;
							break;
					case 6:
							meziScore2 = 2400;
							break;
			}
			selectedScore2 = selectedScore2 + meziScore2;
	}

	if (kostka4Selected > 0 && kostka4Selected <= 2) {
			selectedScore2 = selectedScore2;
			meziScore2 = 0;
	} else if (kostka4Selected > 2) {
			switch (kostka4Selected) {
					case 3:
							meziScore2 = 400;
							break;
					case 4:
							meziScore2 = 800;
							break;
					case 5:
							meziScore2 = 1600;
							break;
					case 6:
							meziScore2 = 3200;
							break;
			}
			selectedScore2 = selectedScore2 + meziScore2;
	}

	if (kostka5Selected > 0) {
			selectedScore2 = selectedScore2;
			meziScore2 = 0;
			switch (kostka5Selected) {
					case 1:
							meziScore2 = 50;
							break;
					case 2:
							meziScore2 = 100;
							break;
					case 3:
							meziScore2 = 500;
							break;
					case 4:
							meziScore2 = 1000;
							break;
					case 5:
							meziScore2 = 2000;
							break;
					case 6:
							meziScore2 = 4000;
							break;
			}
			selectedScore2 = selectedScore2 + meziScore2;
	}

	if (kostka6Selected > 0 && kostka6Selected <= 2) {
			selectedScore2 = selectedScore2;
			meziScore2 = 0;
	} else if (kostka6Selected > 2) {
			switch (kostka6Selected) {
					case 3:
							meziScore2 = 600;
							break;
					case 4:
							meziScore2 = 1200;
							break;
					case 5:
							meziScore2 = 2400;
							break;
					case 6:
							meziScore2 = 4800;
							break;
			}
			selectedScore2 = selectedScore2 + meziScore2;
	}

	if (
			(kostka2Selected > 0 && kostka2Selected < 3) ||
			(kostka3Selected > 0 && kostka3Selected < 3) ||
			(kostka4Selected > 0 && kostka4Selected < 3) ||
			(kostka6Selected > 0 && kostka6Selected < 3)
	) {
			selectedScore2 = 0;
	}

	if (kostka2Selected == 1 && kostka3Selected == 1 && kostka4Selected == 1 && kostka5Selected == 1 && kostka6Selected == 1) {
		selectedScore2 = 750;
	}
	
	if (kostka1Selected == 1 && kostka2Selected == 1 && kostka3Selected == 1 && kostka4Selected == 1 && kostka5Selected == 1 && kostka6Selected == 1) {
		selectedScore2 = 1500
	}
	//update html
	selectedScoreHTML2.innerHTML = selectedScore2;
	console.log(selectedScore2);
}

//CHECKUJE SMULU
let smulaWindow = document.querySelector('.js-smula');
function checkSmula() {
	if (kostka1Selected > 0 || kostka5Selected > 0 ) {
		console.log('Mas alespon jednu kostka1 nebo kostka5')
	} else {
		if (kostka2Selected >= 3) {
			console.log('Mas 3 nebo vice kostka2')
		} else if (kostka3Selected >= 3) {
			console.log('Mas 3 nebo vice kostka3')
		} else if (kostka4Selected >= 3) {
			console.log('Mas 3 nebo vice kostka4')
		} else if (kostka6Selected >= 3) {
			console.log('Mas 3 nebo vice kostka6')
		} else {
			//vybere hracovu plochu 1 & 2 a uděla, aby se na ní ndalo klikat
			smulaWindow.classList.add('smula-show');
			document.querySelector('.js-hrac1').classList.add('no-click');
			document.querySelector('.js-hrac2').classList.add('no-click');
			resetPoctyKostek();
			numberOfSelectedDices = 0;
			generujKostek = 6;
			roundScore = 0;
			roundScore2 = 0;
			roundScoreHTML.innerHTML = roundScore;
			roundScoreHTML2.innerHTML = roundScore2;
			hracuvTah1 = false;
			hracuvTah2 = false;
			setTimeout(() => {
				smulaWindow.classList.remove('smula-show');
				document.querySelector('.js-hrac1').classList.remove('no-click');
				document.querySelector('.js-hrac2').classList.remove('no-click');
				resetDivs();
				resetDivs2();
			}, 2000)
		}
	}
}

const winScreen = document.querySelector('.js-win-screen'); 
const winScreenNapis = document.querySelector('.js-player-win')
function checkVyhra() {
	if (totalScore >= maxScore) {
		winScreen.classList.remove('hide-element');
		winScreenNapis.innerHTML = 'Left player won.'
	} else if (totalScore2 >= maxScore) {
		winScreen.classList.remove('hide-element');
		winScreenNapis.innerHTML = 'Right player won.'
	} else {
		console.log('zatim nikdo nevyhral')
	}
}

function resetPoctyKostek() {
	kostka1Selected = 0;
	kostka2Selected = 0;
	kostka3Selected = 0;
	kostka4Selected = 0;
	kostka5Selected = 0;
	kostka6Selected = 0;
	console.log(kostka1Selected, kostka2Selected, kostka3Selected, kostka4Selected, kostka5Selected, kostka6Selected);
}

let maxScore = 0;
const strana1 = document.querySelector('.js-hrac1');
const strana2 = document.querySelector('.js-hrac2');
const maxScoreDiv = document.querySelector('.choose-score');
const maxScoreHTML = document.querySelector('.js-max-score');
const maxScoreHTML2 = document.querySelector('.js-max-score2');
const confirmScoreButton = document.querySelector('.js-confirm-score');
const maxScoreInput = document.querySelector('#js-max-score-input');

function confirmScore () {
	maxScore = maxScoreInput.value;
	if (maxScore >= 50) {
		maxScoreHTML.innerHTML = maxScore;
		maxScoreHTML2.innerHTML = maxScore;
		maxScoreDiv.classList.add('hide-element');
		strana1.classList.remove('no-click');
		strana2.classList.remove('no-click');
	} else {
		alert('Score must be 50 or higher.')
	}
}

confirmScoreButton.addEventListener('click', confirmScore);