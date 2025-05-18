import { State } from './state';

export async function commandPokedex(state: State) {
  const pokedexEntries = Object.keys(state.pokedex);
  if (pokedexEntries.length === 0) {
    console.log('Your Pokedex is empty!');
  } else {
    console.log('Your Pokedex:');
    pokedexEntries.forEach((pokemon) => {
      console.log(`- ${pokemon}`);
    });
  }
}
