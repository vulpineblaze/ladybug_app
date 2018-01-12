
// var myFunc1 = function() { ... };
// var myFunc2 = function() { ... };
// exports.myFunc1 = myFunc1;
// exports.myFunc2 = myFunc2;

var gen = function(){
	var array = [];
	var num_of_systems = roll(1,3)+roll(1,3)+roll(1,3);
	for (var i = 0; i < num_of_systems; i++) {
		var system = {};
		system.name = get_name(i);
		if(roll(1,20)==1){
			system.planets = ["ProtoPlanetaryDisk","PlantStation"];
		}else{
			system.planets = gen_planets();			
		}
		array.push(system);
	}
	return array;
}

var roll = function(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

var get_name = function(i){
	var names = ["Alpha", "Beta","Gamma","Delta","Epsilon",
					"Zeta","Eta","Theta","Iota","Kappa",
					"Lambda","Mu","Nu","Xi","Omikron",
					"Pi","Rho","Sigma","Tau","Upsilon",
					"Phi","Chi","Psi","Omega"];
	return names[i];
}

var gen_planets = function(i){
	// var planets = ["one","two","three"];
	var planets = [];
	for (var i = 0; i < 9; i++) {
		ratios = get_ratios(i);
		type = get_type(ratios);
		if (type=="null"){

		}else{
			planets.push(type);
		}
	}
	return planets;
}

var get_ratios = function(i){
	var ratios = {};
	switch(i) {
    case 1:
        ratios.ones = "Rainbow"
        ratios.twos = "Treasure"
        ratios.fours = "Radioactive"
        ratios.sixes = "Blasted"
        ratios.elevens = "Blasted"
        ratios.twenties = "Blasted"
        ratios.thirties = "Cracked"
        ratios.fourties = "Cracked"
        ratios.fifties = "Barren"
        ratios.seventies = "Cracked"
        break;
    case 2:
        ratios.ones = "Rainbow"
        ratios.twos = "Treasure"
        ratios.fours = "Radioactive"
        ratios.sixes = "Primordial"
        ratios.elevens = "Primordial"
        ratios.twenties = "Volcanic"
        ratios.thirties = "Primordial"
        ratios.fourties = "Primordial"
        ratios.fifties = "Cracked"
        ratios.seventies = "null"
        break;
    case 3:
        ratios.ones = "Water"
        ratios.twos = "Green"
        ratios.fours = "Hydrocarbon"
        ratios.sixes = "Greenhouse"
        ratios.elevens = "Volcanic"
        ratios.twenties = "Cracked"
        ratios.thirties = "Primordial"
        ratios.fourties = "Primordial"
        ratios.fifties = "Cracked"
        ratios.seventies = "null"
        break;
    case 4:
        ratios.ones = "Subterranean"
        ratios.twos = "Treasure"
        ratios.fours = "Radioactive"
        ratios.sixes = "Redox"
        ratios.elevens = "Hydrocarbon"
        ratios.twenties = "Cracked"
        ratios.thirties = "Cracked"
        ratios.fourties = "Cracked"
        ratios.fifties = "Cracked"
        ratios.seventies = "null"
        break;
    case 5:
        ratios.ones = "Green"
        ratios.twos = "Treasure"
        ratios.fours = "Radioactive"
        ratios.sixes = "Hydrocarbon"
        ratios.elevens = "Redox"
        ratios.twenties = "Cracked"
        ratios.thirties = "AsteroidBelt"
        ratios.fourties = "AsteroidBelt"
        ratios.fifties = "AsteroidBelt"
        ratios.seventies = "null"
        break;
    case 6:
        ratios.ones = "Green"
        ratios.twos = "Treasure"
        ratios.fours = "Radioactive"
        ratios.sixes = "AsteroidBelt"
        ratios.elevens = "AsteroidBelt"
        ratios.twenties = "AsteroidBelt"
        ratios.thirties = "GasGiant"
        ratios.fourties = "GasGiant"
        ratios.fifties = "GasGiant"
        ratios.seventies = "GasGiant"
        break;
    case 7:
        ratios.ones = "Frozen"
        ratios.twos = "Treasure"
        ratios.fours = "Radioactive"
        ratios.sixes = "Redox"
        ratios.elevens = "Oily"
        ratios.twenties = "GasGiant"
        ratios.thirties = "GasGiant"
        ratios.fourties = "GasGiant"
        ratios.fifties = "null"
        ratios.seventies = "null"
        break;
    case 8:
        ratios.ones = "Artificial"
        ratios.twos = "Treasure"
        ratios.fours = "Oily"
        ratios.sixes = "Redox"
        ratios.elevens = "GasGiant"
        ratios.twenties = "GasGiant"
        ratios.thirties = "GasGiant"
        ratios.fourties = "GasGiant"
        ratios.fifties = "GasGiant"
        ratios.seventies = "null"
        break;
    case 9:
        ratios.ones = "Frozen"
        ratios.twos = "SuperDense"
        ratios.fours = "Radioactive"
        ratios.sixes = "Redox"
        ratios.elevens = "GasGiant"
        ratios.twenties = "GasGiant"
        ratios.thirties = "GasGiant"
        ratios.fourties = "GasGiant"
        ratios.fifties = "GasGiant"
        ratios.seventies = "null"
        break;
    default:
        break;
	}
	return ratios;
}

var get_type = function(ratios){
	var the_roll = roll(1,100);
	// console.log(the_roll+"|");
	var type = "null";
	if(the_roll == 1){
		type = ratios.ones;
	}else if(the_roll >=2 && the_roll <= 3){
		type = ratios.twos;
	}else if(the_roll >=4 && the_roll <= 5){
		type = ratios.fours;
	}else if(the_roll >=6 && the_roll <= 10){
		type = ratios.sixes;
	}else if(the_roll >=11 && the_roll <= 20){
		type = ratios.elevens;
	}else if(the_roll >=21 && the_roll <= 30){
		type = ratios.twenties;
	}else if(the_roll >=31 && the_roll <= 40){
		type = ratios.thirties;
	}else if(the_roll >=41 && the_roll <= 50){
		type = ratios.fourties;
	}else if(the_roll >=51 && the_roll <= 75){
		type = ratios.fifties;
	}else if(the_roll >=76 ){
		type = ratios.seventies;
	}else{
		type = "null";
	}
	return type;
}

exports.gen = gen;