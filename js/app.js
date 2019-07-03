console.log("tomagotchi");

const game = {
	createTomagotchi() {
		const pet = new Tomagotchi;
		const name = prompt("Name your Tomagotchi!");
		pet.name = name;
		// console.log(pet);
		// console.log(pet.name);
		$('#name').text(pet.name);
		//start timer
	},

	startTimer() {
		//pause button
	},

	increaseBoredom() {
		//increase by 1 every 10 min
	},

	increaseHunger() {
		//increase by 1 every 20 min
	},

	increaseSleepiness() {
		//Increase by 1 every 30 min
	}
}

game.createTomagotchi()