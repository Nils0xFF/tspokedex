import { Cache } from './pokecache.js';

export class PokeAPI {
  private static readonly baseURL = 'https://pokeapi.co/api/v2';

  private cache = new Cache(1000 * 60 * 5);

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullUrl = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    const cached = this.cache.get<ShallowLocations>(fullUrl);

    if (cached) {
      return cached;
    }

    const req = await fetch(pageURL ?? `${PokeAPI.baseURL}/location-area`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const locations = await req.json();

    this.cache.add(fullUrl, locations);

    return locations;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const fullUrl = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cached = this.cache.get<Location>(fullUrl);

    if (cached) {
      return cached;
    }

    const req = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!req.ok) {
      if (req.status === 404) {
        throw new Error(`Location not found: ${locationName}`);
      }
      throw new Error(`Failed to fetch location: ${locationName}`);
    }

    const location = await req.json();
    this.cache.add(fullUrl, location);

    return location;
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const fullUrl = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    const cached = this.cache.get<Pokemon>(fullUrl);

    if (cached) {
      return cached;
    }

    const req = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!req.ok) {
      if (req.status === 404) {
        throw new Error(`Pokemon not found: ${pokemonName}`);
      }
      throw new Error(`Failed to fetch pokemon: ${pokemonName}`);
    }

    const pokemon = await req.json();
    this.cache.add(fullUrl, pokemon);

    return pokemon;
  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: Array<{
    name: string;
    url: string;
  }>;
};

export type Location = {
  name: string;
  url: string;

  pokemon_encounters: Array<{
    pokemon: {
      name: string;
      url: string;
    };
  }>;
};

export type Pokemon = {
  name: string;
  base_experience: number;
  height: number;
  weight: number;

  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;

  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
};
