import { initState } from './commands/state.js';
import { startREPL } from './repl.js';

function main() {
  const state = initState();
  startREPL(state);
}

main();
