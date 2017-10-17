$(function () {

	////Objects////

	class Pokedex {
		constructor() {
			this.fave_list = [];
			this.current_pokemon = null;
			
		}//constructor

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
				this.current_pokemon = name;

				for (var i = 0; i < typeData.length; i++) {
					types += `<li>${typeData[i].type.name}</li>`;
				}
				types += '</ul>';
				
				$('#display').html(`
					<img id="star" class="star" data-name="${name}" src="imgs/star.png"/>
					<img class="sprite" src="${results.sprites.front_default}"/> 
					<h1>${id} ${name}</h1> 
					<p>Height: ${height}</p> 
					<p>Weight: ${weight}</p> 
					<p>Types: ${types}</p>
					`);//end append
				if (jQuery.inArray(this.current_pokemon, this.fave_list) === -1) {
					$('#star').attr('src','imgs/star.png');
				}//if
				else {
					$('#star').attr('src','imgs/color_star.png');
				}
			});//results
		}//showDetails

		displayFaves() {
			var list = '';
			for (var i = 0; i < this.fave_list.length; i++) {
				list += `<li>${this.fave_list[i]}</li>`;
			}//forloop
			$('#favorites').html(`<ul>${list}</ul>`);
		}//displayFaves

		addToFaveList() {
			// var check_list = $(this.fave_list).inArray(this.current_pokemon);
			if ($.inArray(this.current_pokemon, this.fave_list) === -1) {
				this.fave_list.push(this.current_pokemon);
				$('#star').attr('src','imgs/color_star.png');
			}//if 
			else {
				this.fave_list.splice($.inArray(this.current_pokemon, this.fave_list), 1);
				$('#star').attr('src','imgs/star.png');
			}//else
			this.displayFaves();
		}//addToFaveList

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
		pokedex.showDetails(name);
	});	

	//favorite
	$(document).on('click', '.star', function() {
		// var pokemon = $(this).attr('data-name');
		pokedex.addToFaveList();
	})

































});

