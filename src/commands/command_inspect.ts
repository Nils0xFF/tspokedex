import { State } from './state';

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length === 0) {
    throw new Error('Please provide a pokemon name');
  }

  const pokemon = state.pokedex[args[0]];

  if (!pokemon) {
    throw new Error(`Pokemon not found in your Pokedex: ${args[0]}`);
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log(`Height: ${pokemon.height}`);

  console.log(`\nStats:`);
  pokemon.stats.forEach((stat) => {
    console.log(`- ${stat.stat.name}: ${stat.base_stat}`);
  });

  console.log(`\nTypes:`);
  pokemon.types.forEach((type) => {
    console.log(`- ${type.type.name}`);
  });
}
