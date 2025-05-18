import { State } from './state.js';

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length === 0) {
    throw new Error('Please provide a location name');
  }

  const location = await state.pokeApi.fetchLocation(args[0]);
  console.log(`Exploring ${location.name}...`);
  console.log(`Found Pokemon:\n`);

  location.pokemon_encounters?.forEach((encounter) => {
    console.log(`- ${encounter.pokemon.name}`);
  });
}
