console.log("tomagotchi class");

class Tomagotchi {
	constructor(name) {
		this.name = name
		this.boredom = 0
		this.hunger = 0
		this.sleepiness = 0
		this.age = 0
		this.timesReborn = 0
		this.isDead = false
	}

	//---------------Tomagotchi Bodily Functions------
	haveFun() {
		if( this.boredom > 3) {
			this.boredom -= 3;
		}
		
	}

	eatFood() {
		if( this.hunger > 2) {
			this.hunger -=2;
		}
	}

	sleepLots() {
		if( this.sleepiness > 5) {
			this.sleepiness -= 5;
		}
	}

	emergeFromAshes() {
		this.timesReborn += 1;
		this.age = 0;
	}

} 

