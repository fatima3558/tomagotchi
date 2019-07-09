console.log("tomagotchi");


const game = {	
	pet: {},
	
	createTomagotchi() {
		const phoenix = new Tomagotchi;
		const name = prompt("Name your Tomagotchi!");
		phoenix.name = name;
		$('#name').text(phoenix.name);
		this.pet = phoenix;
		$('#baby').hide();
		$('#child').hide();
		$('#adult').hide();
		this.startTimer();
	},

	startTimer() {
		this.updateStats() // print initial values
		const age = setInterval(() =>{
	//---------- pet age to update stats unless pet dies-------
			this.pet.age++;
			if(this.pet.boredom === 10 || this.pet.hunger === 10 || this.pet.sleepiness === 10) {
				this.updateStats();
				this.pet.isDead = true;
				this.die();
				clearInterval(age);

			} else {
				this.updateStats()
			}

	//--------- boredom, hunger, sleepiness increases--------
			//boredom should increase every 10 minutes
			if(this.pet.age % 2 === 0){
				this.pet.boredom++;

			};
			//hunger should increase every 20 minutes
			if(this.pet.age % 3 === 0){
				this.pet.hunger++;
			};
			//sleepiness should increase every 30 minutes
			if(this.pet.age % 5 === 0){
				this.pet.sleepiness++;
			};
	//-----------when to evolve-------------
			if (this.pet.timesReborn === 0 && this.pet.age > 15 && this.pet.age < 30) {
				this.becomeBaby();			
			}
			else if (this.pet.timesReborn > 0 && this.pet.age < 30) {
				this.becomeBaby();
			}
			else if (this.pet.age > 30 && this.pet.age < 45) {
				this.becomeChild();
			}
			else if (this.pet.age > 45 && this.pet.age < 60) {
				this.becomeAdult();
			}
			else if (this.pet.age === 15 || this.pet.age === 30 || this.pet.age === 45) {
				this.growUp();
			}
			else if (this.pet.age === 60) {
				this.growUp();
				this.pet.emergeFromAshes();
			}

		}, 1000);

	},

	updateStats() {
		$('#sleepy').text(`${this.pet.sleepiness}`);
		$('#hungry').text(`${this.pet.hunger}`);
		$('#bored').text(`${this.pet.boredom}`);
		$('#reborn').text(`${this.pet.name} is on life number ${this.pet.timesReborn + 1}!`)
		$('#age').text(`${this.pet.name} is ${(this.pet.age)} seconds old!`);
	},

	die() {
		//to stop animation, will have to add css for animation in jquery and remove it here as well
		// $('.pet-img').css("animation-name, null;")
		console.log('it died!');
		$('#age').text(`Sadness! ${this.pet.name} grew to the ripe old age of ${this.pet.age} seconds. RIP.`)
	},

//---------------- Tomagotchi evolutions------------
	becomeBaby() {
		$('#smoke').show();
		$('#baby').show();
	},

	becomeChild() {
		$('#smoke').show();
		$('#child').show();
	},

	becomeAdult() {
		$('#smoke').show();
		$('#adult').show();
	},

	growUp() {
		$('#egg').hide();
		$('#baby').hide();
		$('#child').hide();
		$('#adult').hide();
		$('#smoke').hide();
	}

};

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

/*
future goals may include:
-stopping animation when pet dies
-include more animations/smooth out current animations
-having activities take a certain amount of time during which no other activities can happen, i.e., cannot be fed while sleeping
*/

