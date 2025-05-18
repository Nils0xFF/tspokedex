import { State } from './commands/state.js';

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .split(' ')
    .filter((s) => s.length > 0);
}

export function startREPL(state: State) {
  state.readline.prompt();

  state.readline.on('line', async (input) => {
    const clean = cleanInput(input.toLowerCase());
    if (clean.length === 0) {
      state.readline.prompt();
      return;
    }

    const command = clean[0];
    const callback = state.commands[command]?.callback;

    if (callback) {
      try {
        await callback(state, ...clean.slice(1));
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        }
        console.log(err);
      }
    } else {
      console.log('Unknown command');
    }

    state.readline.prompt();
  });
}
