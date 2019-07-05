console.log("tomagotchi class");

class Tomagotchi {
	constructor(name) {
		this.name = name
		this.boredom = 0
		this.hunger = 0
		this.sleepiness = 0
		this.age = 0
		this.timesReborn = 0

		this.isPlaying = false
		this.isEating = false
		this.isSleeping = false
		this.isDead = false
	}

	//---------------Tomagotchi Bodily Functions------
	haveFun() {
		if( this.boredom > 3 && this.isEating === false && this.isSleeping === false) {
			this.boredom -= 3;
		}
		
	}

	eatFood() {
		if( this.hunger > 2 && this.isPlaying === false && this.isSleeping === false) {
			this.hunger -=2;
		}
	}

	sleepLots() {
		if( this.sleepiness > 5 && this.isPlaying === false && this.isEating === false) {
			this.sleepiness -= 5;
		}
	}

	emergeFromAshes() {
		console.log('emerge from ashes works');
		this.timesReborn += 1;
		this.age = 0;
	}

} 

