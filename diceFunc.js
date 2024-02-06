//jednotlive kostky
let kostka1 = 0;
let kostka2 = 0;
let kostka3 = 0;
let kostka4 = 0;
let kostka5 = 0;
let kostka6 = 0;

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

const rollButton = document.querySelector('.js-roll')
hracuvTah = true;
rollButton.addEventListener('click', () =>{
	priradHodnotuKostkam();
	console.log(kostky) //array s kostkama
})