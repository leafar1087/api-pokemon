"use strict"
let form = document.querySelector("#pokemon-search");

//document.addEventListener("DOMContentLoaded", () => fetchData());
form.addEventListener("submit", event => buscarPokemon(event));

/*
function fetchData(){
    let url = "https://pokeapi.co/api/v2/pokemon/ditto";
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        mostrarPokemon(data);
    });
}
*/

function mostrarPokemon(pokemonData){
    
    
    let contenedor = document.getElementById("pokemon-wrapper");
    let img = contenedor.querySelector("img");
    let p = contenedor.querySelector("p");

    img.src = pokemonData.sprites.other.dream_world.front_default||pokemonData.sprites.front_default;
    p.textContent = pokemonData.name;
    
}

function buscarPokemon(event){
    //console.log(event);
    let input = form.querySelector("input");
    let pokemonName = input.value.toLowerCase();
    //console.log(pokemonName);
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        //console.log(data);
        mostrarPokemon(data);
    })
    .catch(error => mostrarError());
    event.preventDefault();
}

function mostrarError(){
    let toast = document.getElementById("toast");
    //let contenedor = document.getElementById("pokemon-wrapper");
    let input = form.querySelector("input");
    
    input.value = "";
    limpiarBusqueda()    
    toast.classList.toggle("escondido");
    setTimeout(() => {
        
        toast.classList.toggle("escondido");
        

    }, 2000);
}

function limpiarBusqueda(){
    let contenedor = document.getElementById("pokemon-wrapper");
    let img = contenedor.querySelector("img");
    let p = contenedor.querySelector("p");

    if (img.value !== null){
        img.src = "";
        p.textContent="";
    }
}

