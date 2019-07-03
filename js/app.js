console.log("tomagotchi");

$('#tomagotchi-activities').on('click', (e) =>{
	const $target = $(e.target);
	console.log($target.attr('id'));
});

const game = {	
	pet: {},
	isPlaying: false,
	isEating: false,
	isSleeping: false,
	
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
			if(this.pet.age % 3 === 0){
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
			if(this.pet.age % 1 === 0){
				this.pet.sleepiness++;
				$('#sleepy').text(`${this.pet.sleepiness}`);
				if($(this.target).attr('id', 'lights') && this.pet.sleepiness > 5 && this.isPlaying === false && this.isEating === false) {
						this.pet.sleepLots();
					}

			};

			if(this.pet.boredom === 10 || this.pet.hunger === 10 || this.pet.sleepiness === 10) {
				clearInterval(age);
				$('#age').text(`Sadness! ${this.pet.name} grew to the ripe old age of ${this.pet.age} seconds. RIP.`)
			}

		}, 1000);

	},

	//------------Interact with Tomagotchi------------

	playWithPet() {
		//if boredom level is more than 3 AND if isEating or isSleeping are false, allow haveFun
		//switch isPlaying to true for some time
		this.pet.haveFun();
		//switch isPlaying to false
	},

	feedPet() {
		//if hunger level is more than 2 AND if isPlaying and isSleeping are false, allow eatFood
		this.pet.eatFood();
	},

	turnOffLights(e) {
		// console.log(`turn off lights is working`);

		
	}


	//---------- Tomagotchi evolutions------------




}

game.createTomagotchi()
