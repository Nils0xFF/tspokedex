# Pokemon CLI Game

A command-line interface Pokemon game built as part of the boot.dev curriculum. This CLI application allows you to explore the Pokemon world, catch Pokemon, and build your Pokedex using the PokeAPI.

## Features

- Explore different locations in the Pokemon world
- Catch Pokemon you encounter
- View your Pokedex collection
- Inspect caught Pokemon's stats
- Navigate through location maps
- Cache API responses for better performance

## Commands

- `help`: Displays available commands and their descriptions
- `map`: Shows the current page of locations
- `map back`: Shows the previous page of locations
- `explore <location>`: Explore a specific location to find Pokemon
- `catch <pokemon>`: Attempt to catch a Pokemon
- `inspect <pokemon>`: View details of a caught Pokemon
- `pokedex`: View all Pokemon you've caught
- `exit`: Exit the application

## Getting Started

1. Make sure you have Node.js installed
2. Clone this repository
3. Install dependencies:
```bash
npm install
```
4. Build the project:
```bash
npm run build
```
5. Start the game:
```bash
npm start
```

## Technical Details

- Built with TypeScript and Node.js
- Uses the [PokeAPI](https://pokeapi.co/) for Pokemon data
- Implements caching to minimize API calls
- Uses Node.js readline for CLI interaction

## Project Structure

- `src/api/`: API client and caching implementation
- `src/commands/`: Command implementations
- `src/`: Main application logic and REPL implementation

## License

This project was created as part of the boot.dev curriculum.
