console.log("tomagotchi class");

class Tomagotchi {
	constructor(name) {
		this.name = name
		this.boredom = 0
		this.hunger = 0
		this.sleepiness = 0
		this.age = 0
		this.timesBorn = 0
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
		this.boredom -= 3;
	}

	eatFood() {
		this.hunger -=2;
	}

	sleepLots() {
		this.sleepiness -= 5;
	}

}

