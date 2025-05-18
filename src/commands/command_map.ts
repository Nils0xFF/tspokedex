import { State } from './state.js';

export async function commandMap(state: State) {
  try {
    const response = await state.pokeApi.fetchLocations(state.nextLocationsURL);
    state.nextLocationsURL = response.next ?? undefined;
    state.prevLocationsURL = response.previous ?? undefined;
    response.results.forEach((location) => {
      console.log(location.name);
    });
  } catch (e) {
    throw e;
  }
}

export async function commandMapBack(state: State) {
  try {
    if (!state.prevLocationsURL) {
      console.log(`you're on the first page`);
      return;
    }
    const response = await state.pokeApi.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = response.next ?? undefined;
    state.prevLocationsURL = response.previous ?? undefined;
    response.results.forEach((location) => {
      console.log(location.name);
    });
  } catch (e) {
    throw e;
  }
}
