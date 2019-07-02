console.log("tomagotchi");

const game = {
	createTomagotchi() {
		const name = prompt("Name your Tomagotchi!");
		console.log(name);
		return name;
	}
}

game.createTomagotchi();