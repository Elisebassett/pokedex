$(function () {

	////Objects////

	class Pokedex {
		constructors() {
			
		}//constructors
		showDetails(name){
			cachedFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then(r=> r.json())
			.then(results =>{
				console.log(results);
				let s = results.sprites;
				let id = results.id;
				let n = results.name;
				let h = results.height;
				let w = results.weight;
				let tArray = [results.type];
				let t = for (var i = 0; i < rArray.length; i++) {
							return ${tArray[i]}
						}//for loop



				$('#display').append(`<img src="${s}"/> <h1>${id} ${n}</h1> <p>Height: ${h}</p> <p>Weight: ${w}</p> <p>Types: ${t}</p>`);
			});//results
		}//showDetails
	}//Pokedex

	var pokedex = new Pokedex();

	////Click events/////
	
	$('#pokeload').on('click', function(){
		for (var i = 0; i < pokemonArray.length; i++) {
			$('#pokelist').append(`<button id="${pokemonArray[i]}" data-name="${pokemonArray[i]}">${pokemonArray[i]}</button>`);
		}//for loop
	});//pokelist/function

	$(document).on('click', '.pokemon button', function () {
		var name = $(this).attr('data-name');
		pokedex.showDetails(name);
	});//test function





	








































});

