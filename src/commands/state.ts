import { createInterface, type Interface } from 'readline';
import { PokeAPI, Pokemon } from '../api/pokeapi.js';
import { getCommands } from './get-commands.js';

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export interface State {
  commands: Record<string, CLICommand>;
  readline: Interface;
  pokeApi: PokeAPI;
  nextLocationsURL?: string;
  prevLocationsURL?: string;
  pokedex: Record<string, Pokemon>;
}

export function initState(): State {
  return {
    commands: getCommands(),
    readline: createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Pokedex > ',
    }),
    pokeApi: new PokeAPI(),
    nextLocationsURL: undefined,
    prevLocationsURL: undefined,
    pokedex: {},
  };
}
