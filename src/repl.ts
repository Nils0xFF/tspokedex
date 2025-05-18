import { createInterface } from 'node:readline';

export function cleanInput(input: string): string[] {
  return input.trim().split(' ');
}

export function startREPL() {
  const repl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > ',
  });

  repl.prompt();

  repl.on('line', (input) => {
    const clean = cleanInput(input.toLowerCase());
    if (clean.length === 0) {
      repl.prompt();
      return;
    }
    console.log(`Your command was: ${clean[0]}`);
    repl.prompt();
  });
}
