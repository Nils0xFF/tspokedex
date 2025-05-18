import { State } from './state.js';

export async function commandHelp(state: State) {
  console.log('Welcome to the Pokedex!');
  console.log('Usage:\n');
  Object.entries(state.commands).forEach(([command, commandInfo]) => {
    console.log(`${command}: ${commandInfo.description}`);
  });
}
