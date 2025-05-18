import { commandCatch } from './command_catch.js';
import { commandExit } from './command_exit.js';
import { commandExplore } from './command_explore.js';
import { commandHelp } from './command_help.js';
import { commandInspect } from './command_inspect.js';
import { commandMap, commandMapBack } from './command_map.js';
import type { CLICommand } from './state.js';

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: 'exit',
      description: 'Exits the pokedex',
      callback: commandExit,
    },
    help: {
      name: 'help',
      description: 'Displays a help message',
      callback: commandHelp,
    },
    map: {
      name: 'map',
      description: 'Lists the next 20 locations based on the current page',
      callback: commandMap,
    },
    mapb: {
      name: 'mapb',
      description: 'Lists the previous 20 locations based on the current page',
      callback: commandMapBack,
    },
    explore: {
      name: 'explore',
      description: 'Explores the provided location',
      callback: commandExplore,
    },
    catch: {
      name: 'catch',
      description: 'Tries to catch the provided pokemon',
      callback: commandCatch,
    },
    inspect: {
      name: 'inspect',
      description: 'Inspects the provided pokemon from your pokedex',
      callback: commandInspect,
    },
    // can add more commands here
  };
}
