export default class Game {
  constructor(player, canvas, images, form) {
    this.player = player;
    this.canvas = canvas;
    this.images = images;
    this.form = form;

    this.speed = 400;

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  move(direction) {
    console.log('move to ', direction);

    let x = this.player.positionX;
    let y = this.player.positionY;

    let image = this.images.getUp();

    this.canvas.clear(x, y);

    switch (direction) {
      case 'E':
        x += this.canvas.widthItem;
        image = this.images.getRight();
        break;
      case 'O':
        x -= this.canvas.widthItem;
        image = this.images.getLeft();
        break;
      case 'N':
        y -= this.canvas.widthItem;
        image = this.images.getUp();
        break;
      case 'S':
        y += this.canvas.widthItem;
        image = this.images.getDown();
        break;
      default:
        return;
    }

    this.player.setPositions(x, y);

    this.player.capturePokemon(x, y);

    this.canvas.drawImage(x, y, image);
  }

  addEventsListeners() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    const moves = {
      ArrowLeft: 'O',
      ArrowRight: 'E',
      ArrowUp: 'N',
      ArrowDown: 'S',
    };

    if (moves[e.key]) {
      this.move(moves[e.key]);
    }
  }

  debounce(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  async playAuto(path, animation) {
    for (let index = 0; index < path.length; index++) {
      const direction = path[index];
      if (animation) {
        await this.debounce(this.speed);
      }
      this.move(direction);
    }
    if (animation) {
      await this.debounce(this.speed);
    }
  }

  async init(path, animation) {
    await this.playAuto(path, animation);
    this.addEventsListeners();

    this.form.showModalSuccess(this.player.pokemonsCaptured.length);
  }
}
