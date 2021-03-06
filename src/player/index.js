export default class Game {
  constructor(centerCanva) {
    this.positionX = centerCanva;
    this.positionY = centerCanva;

    this.pokemonsCaptured = [[centerCanva, centerCanva]];
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

    document.querySelector('#countPokemons').innerHTML = `${this.pokemonsCaptured.length}`;
  }

  setPositions(x, y) {
    this.positionX = x;
    this.positionY = y;

    document.querySelector('#playerX').innerHTML = `${x}`;
    document.querySelector('#playerY').innerHTML = `${y}`;
  }
}
