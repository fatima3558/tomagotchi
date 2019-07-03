console.log("tomagotchi");

const game = {

	createTomagotchi() {
		//add event listener for button id = 'newTomagotchi'
		const name = prompt("Name your Tomagotchi!");
		console.log(name);
		return name;
		//hide button
		//start timer
	}

	startTimer() {
		//pause button
	}

	increaseBoredom() {
		//increase by 1 every 10 min
	}

	increaseHunger() {
		//increase by 1 every 20 min
	}

	increaseSleepiness() {
		//Increase by 1 every 30 min
	}
}


game.createTomagotchi();