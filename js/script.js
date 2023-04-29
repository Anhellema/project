"use strict";

// GOBLIN PAGE
// Initialize character inventory and gold
let inventory = {};
let gold = 100;

// Function to add item to inventory
function addItemToInventory(itemName) {
	if (inventory[itemName]) {
		// Item already exists in inventory, increment quantity
		inventory[itemName]++;
	} else {
		// Item doesn't exist in inventory, add it with quantity of 1
		inventory[itemName] = 1;
	}
  
	// Update inventory display
	updateInventoryDisplay();
}

// Function to update inventory display
function updateInventoryDisplay() {
	let itemList = document.getElementById("item-list");
	itemList.innerHTML = "";
  
	for (let itemName in inventory) {
		let itemQuantity = inventory[itemName];
		let itemElement = document.createElement("li");
		itemElement.textContent = itemName + ": " + itemQuantity;
		itemList.appendChild(itemElement);
	}
}

// Function to update gold display
function updateGoldDisplay() {
	let goldElement = document.getElementById("gold");
	goldElement.textContent = gold;
}

// Add event listeners to buy buttons
let buyButtons = document.getElementsByClassName("buy-button");
for (let i = 0; i < buyButtons.length; i++) {
	let buyButton = buyButtons[i];
	buyButton.addEventListener("click", function() {
		let appleName = this.getAttribute("data-name");
		let applePrice = parseInt(this.previousElementSibling.textContent);
    
		if (gold >= applePrice) {
			// Subtract gold and add apple to inventory
			gold -= applePrice;
			addItemToInventory(appleName);
      
			// Update gold and inventory displays
			updateGoldDisplay();
		} else {
			alert("Not enough gold!");
		}
	});
}

// Update initial displays
updateInventoryDisplay();
updateGoldDisplay();


// alert('hello');

// const result = confirm("Are you here?");
// console.log(result)

/* if (confirm('Ты крыса?')) {
  alert("Добро пожаловать, крыса!");
} else {
  window.location.replace("https://www.youtube.com/watch?v=j6KVEnIdj5c");
} */

/* const answer = prompt("Ты крыса?", "");

if (answer === 'Да') {
  alert("Добро пожаловать, крыса!");
  } else {
    window.location.replace("https://www.youtube.com/watch?v=j6KVEnIdj5c");  
  } */


/* const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?','');
answers[2] = prompt('Сколько вам лет?','');

console.log(typeof(answers)); */


/* let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(2*4 == '9');
 */
/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

const video = document.querySelector("video");

video.addEventListener("ended", () => {
	video.currentTime = 0;
	video.play();
});