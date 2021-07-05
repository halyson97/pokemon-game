export default class Game {
  constructor() {
    this.positionX = 240;
    this.positionY = 240;

    this.pokemonsCaptured = [[240, 240]];
  }

  isCaptured(x, y) {
    return this.pokemonsCaptured.find(item => item[0] === x && item[1] === y);
  }

  capturePokemon(x, y) {
    if (!this.isCaptured(x, y)) {
      const pokemons = [...this.pokemonsCaptured];
      pokemons.push([x, y]);

      this.pokemonsCaptured = pokemons;
    }

    document.querySelector('#countPokemons').innerHTML = `${this.pokemonsCaptured.length} pokemons`;
  }

  setPositions(x, y) {
    this.positionX = x;
    this.positionY = y;
  }
}
