import { State } from './state';

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length === 0) {
    throw new Error('Please provide a pokemon name');
  }

  const pokemon = await state.pokeApi.fetchPokemon(args[0]);
  console.log(`Throwing a Pokeball at ${pokemon.name}...`);

  const catchExp = Math.floor(Math.random() * 1000);

  if (catchExp > pokemon.base_experience) {
    console.log(`${pokemon.name} was caught!`);
    state.pokedex[pokemon.name] = pokemon;
  } else {
    console.log(`${pokemon.name} has escaped!`);
  }
}
