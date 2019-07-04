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
			if(this.pet.boredom === 10 || this.pet.hunger === 10 || this.pet.sleepiness === 10) {
				this.updateStats();
				this.pet.isDead = true;
				this.die();
				clearInterval(age);

			} else {
				this.updateStats()
			}

			this.pet.age++;

			//boredom should increase every 10 minutes
			//Will increase by 1 seconds to build
			if(this.pet.age % 1 === 0){
				this.pet.boredom++;

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



			

			
		}, 1000);

	},

	updateStats() {
		$('#sleepy').text(`${this.pet.sleepiness}`);
		$('#hungry').text(`${this.pet.hunger}`);
		$('#bored').text(`${this.pet.boredom}`);
		$('#age').text(`${this.pet.name} is ${this.pet.age} seconds old!`);
	},

	die() {
		console.log('it died!');
		$('#age').text(`Sadness! ${this.pet.name} grew to the ripe old age of ${this.pet.age} seconds. RIP.`)
	}

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
