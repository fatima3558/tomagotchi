console.log("tomagotchi");

$('#tomagotchi-activities').on('click', (e) =>{
	console.log(`clicked ${$(e.target).attr('id')}`);
})

const game = {	
	pet: {},
	isPlaying: false,
	isEating: false,
	isAsleep: false,
	
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
		$('#age').text(`${this.pet.name} is ${this.pet.age} seconds old!`);
		$('#bored').text(`${this.pet.boredom}`);
		$('#hungry').text(`${this.pet.hunger}`);
		$('#sleepy').text(`${this.pet.sleepiness}`);

		const age = setInterval(() =>{
			this.pet.age++;
			$('#age').text(`${this.pet.name} is ${this.pet.age} seconds old!`);

			//boredom level should increase every 10 minutes
			//Will increase by 1 seconds to build
			if(this.pet.age % 1 === 0){
				this.pet.boredom++;
				$('#bored').text(`${this.pet.boredom}`);
			};

			//hunger level should increase every 20 minutes
			//will increase by 2 seconds to build
			if(this.pet.age % 2 === 0){
				this.pet.hunger++;
				$('#hungry').text(`${this.pet.hunger}`);
			};

			//sleepiness should increase every 30 minutes
			//will increase by 3 seconds to build
			if(this.pet.age % 3 === 0){
				this.pet.sleepiness++;
				$('#sleepy').text(`${this.pet.sleepiness}`)
			};

			if(this.pet.boredom === 10 || this.pet.hunger === 10 || this.pet.sleepiness === 10) {
				clearInterval(age);
				$('#age').text(`Sadness! ${this.pet.name} grew to the ripe old age of ${this.pet.age} seconds. RIP.`)
			}

		}, 1000);

	},

}

game.createTomagotchi()