$(function () {

	////Objects////

	class Pokedex {
		constructor() {
			this.fave_list = [];
			this.current_pokemon = null;
			
		}//constructor

		/////////Pokemon Display///////////
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
					<div class = "sprite_display">
						<img class="sprite" src="${results.sprites.front_default}"/> 
						<img class="sprite" src="${results.sprites.back_default}"/> 
						<img class="sprite" src="${results.sprites.front_female}"/> 
						<img class="sprite" src="${results.sprites.back_female}"/> 
						<img class="sprite" src="${results.sprites.front_shiny}"/> 
						<img class="sprite" src="${results.sprites.back_shiny}"/> 
						<img class="sprite" src="${results.sprites.front_shiny_female}"/> 
						<img class="sprite" src="${results.sprites.back_shiny_female}"/> 
					</div>
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


		/////////Favorite list///////////
		displayFaves() {
			var list = '';
			for (var i = 0; i < this.fave_list.length; i++) {
				list += `<li class="fave" draggable="true" ondragstart="event.dataTransfer.setData('text/html', '${this.fave_list[i]}');">${this.fave_list[i]}</li>`;
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

	//////////////////Drag and Drop Functions//////////////////////
	


	

	//////////////////Click events//////////////////////
	////Load Pokemon////
	$('#pokeload').on('click', function(){
		for (var i = 0; i < pokemonArray.length; i++) {
			$('#pokelist').append(`<button id="${pokemonArray[i]}" data-name="${pokemonArray[i]}">${pokemonArray[i]}</button>`);
		}//for loop
	});//pokelist/function

	////Display info////
	$(document).on('click', '.pokemon button', function () {
		var name = $(this).attr('data-name');
		pokedex.showDetails(name);
	});	

	////Favorite////
	$(document).on('click', '.star', function() {
		// var pokemon = $(this).attr('data-name');
		pokedex.addToFaveList();
	})



	





// var drag_element = null;

// 	function dragFave(e) {
// 		drag_element = this;
// 		e.dataTransfer.effectAllowed = 'move';
// 		e.dataTransfer.setData('text/html', this.outerHTML);

// 		this.classList.add('dragElem');

// 	}//dragFave

































});

