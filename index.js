$(function () {
	
	$('#pokeload').on('click', function(){
		for (var i = 0; i < pokemonArray.length; i++) {
			$('#pokelist').append(`<button id=${pokemonArray[i]}>${pokemonArray[i]}</button>`);
		}
	});//pokelist/function

	class Pokedex {
		constructors() {
			
		}//constructors
		showDetails(name){
			cachedFetch(`http://pokeapi.co/api/v2/pokemon/${name}`)
			.this(r=> r.json())
			.this(results =>{
				let images = results.message;
				console.log(results.message);
			});
		}//showDetails
	}//pokedex
	var pokedex = new Pokedex();

	$('#test').click(function () {
		pokedex.showDetails();
	});

	// class Pokemon {
	// 	constructors() {
	// 		this.info = [i];
	// 	}
	// }

	
	// var bulbasaur = new Pokemon();








































});

