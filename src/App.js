import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [pokemons, setPokemon] = useState([]);

 // fetch pokemons from API inside or via useEffect
  const getPokemon = (event) => {
        fetch('https://swapi.dev/api/people/') // fetch pokemons from API
            .then(response => response.json()) //convert json obj
            .then(response => { setPokemon(response.results) })// resolve response and setPeople as response.results
    }
 //function display 2 cases where pokemons are available or empty
     const displayPokemon = () => {
        if (pokemons.length === 0){
            return(
                <li>Haven't caught them all, please "Fetch Pokémon!"</li>
            )
        }
        else{
          return (pokemons.map((pokemon, idx) => {
            return (
              <ul className='list-group w-50' key={idx}> 
                <li className="list-group-items list-group-item-action" >{idx + 1}: {pokemon.name}</li>
                </ul>
                );
            }))
        }
    }
  
  return (
    <div className="container d-flex align-items-center flex-column">
      <button className="btn btn-warning m-3 " onClick={getPokemon}>Fetch Pokemon</button>
       <h4 className="">Pokémon</h4>
     
        {pokemons.length > 0 && pokemons.map((pokemon, idx) => { 
          return (
             <ul className='list-group w-50' key={idx}> 
              <li className="list-group-items list-group-item-action"> { pokemon.name}</li>
            </ul>
            
          )
        })}
      <br />
      <h4 className="">Other Pokémon Display</h4>
       {displayPokemon()}
    </div>
  );
}

export default App;
