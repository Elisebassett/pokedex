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
				let id = results.id;
				let name = results.name;
				let height = results.height;
				let weight = results.weight;
				let typeData = results.types;
				let types = '<ul>';
				for (var i = 0; i < typeData.length; i++) {
					types += `<li><img src="${typeData[i].type.name}</li>`;
				}
				types += '</ul>';



				$('#display').append(`<img src="${results.sprites.front_default}"/> <h1>${id} ${name}</h1> <p>Height: ${height}</p> <p>Weight: ${weight}</p> <p>Types: ${types}</p>`);
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

	//display info
	$(document).on('click', '.pokemon button', function () {
		var name = $(this).attr('data-name');
		$('#display').empty();
		pokedex.showDetails(name);
	});	

	////Favorite////




	








































});

