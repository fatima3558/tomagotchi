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
		this.updateStats() // print initial values

		const age = setInterval(() =>{
			this.pet.age++;

			//boredom should increase every 10 minutes
			//Will increase by 1 seconds to build
			if(this.pet.age % 1 === 0){
				this.pet.boredom++;
				$('#bored').text(`${this.pet.boredom}`);
				if($(this.target).attr('id', 'play') && this.pet.boredom > 3 && this.isEating === false && this.isSleeping === false) {
					this.pet.haveFun();
				}
			};

			//hunger should increase every 20 minutes
			//will increase by 2 seconds to build
			if(this.pet.age % 2 === 0){
				this.pet.hunger++;
			};

			//sleepiness should increase every 30 minutes
			//will increase by 3 seconds to build
			if(this.pet.age % 3 === 0){
				this.pet.sleepiness++;
			};

			if( this.pet.isDead) {
				clearInterval(age);
				$('#age').text(`Sadness! ${this.pet.name} grew to the ripe old age of ${this.pet.age} seconds. RIP.`)
			}


			this.updateStats()
		
		}, 1000);

	},

	updateStats() {
		$('#sleepy').text(`${this.pet.sleepiness}`);
		$('#hungry').text(`${this.pet.hunger}`);
		$('#bored').text(`${this.pet.boredom}`);
		$('#age').text(`${this.pet.name} is ${this.pet.age} seconds old!`);
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

	//---------- Tomagotchi evolutions------------

}

$('#tomagotchi-activities').on('click', (e) =>{
	const $target = $(e.target);
	const whatToDo = $target.attr('id');
	if(whatToDo === 'food') {
		console.log('food');
		game.pet.eatFood();
	}
	else if (whatToDo === 'play') {
		console.log('play');
		game.pet.haveFun();
	}
	else if (whatToDo === 'lights') {
		console.log('lights');
		game.pet.sleepLots();
	}
});

game.createTomagotchi()
