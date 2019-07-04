console.log("tomagotchi class");

class Tomagotchi {
	constructor(name) {
		this.name = name
		this.boredom = 0
		this.hunger = 0
		this.sleepiness = 0
		this.age = 0
		this.timesBorn = 0

		this.isPlaying = false
		this.isEating = false
		this.isSleeping = false
		this.isDead = false
	}
	//--------Tomagotchi LifeStages-------------------
	becomeEgg() {
		//after x minutes, become baby
	}

	becomeBaby() {
		//after x minutes, become Child
	}

	becomeChild() {
		//after x minutes, become Adult
	}

	becomeAdult() {
		//after x minutes, be Reborn
	}

	beReborn() {
		//burn up, be reborn from ashes as baby
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

} 

