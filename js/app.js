console.log("tomagotchi");

const game = {	
	pet: {},
	createTomagotchi() {
		const phoenix = new Tomagotchi;
		const name = prompt("Name your Tomagotchi!");
		phoenix.name = name;
		// console.log(pet.name);
		$('#name').text(phoenix.name);
		this.pet = phoenix;
		this.startTimer();
	},

	startTimer() {
		console.log("timer works");
		const age = setInterval(() =>{
			this.pet.age++;
			$('#age').text(`${this.pet.name} is ${this.pet.age} seconds old!`);
		}, 1000)
		
	},

	getBored() {

	},

	getHungry() {

	},

	getSleepy() {

	}

}

game.createTomagotchi()