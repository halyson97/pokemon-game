export default class Game {
  constructor(renderGame) {
    this.renderGame = renderGame;

    this.modal = document.querySelector('#modal-initial');
    this.form = document.querySelector('#form-initial');
    this.input = document.querySelector('#input-path');

    this.submitForm = this.submitForm.bind(this);
    this.onkeyUpInput = this.onkeyUpInput.bind(this);
  }

  init() {
    if (this.form) {
      this.form.addEventListener('submit', this.submitForm);
    }
    if (this.input) {
      this.input.addEventListener('keyup', this.onkeyUpInput);
    }
  }

  submitForm(event) {
    if (event) {
      event.preventDefault();
    }

    // const value = this.input.value;
    this.input.value = '';

    this.showModal(false);

    // this.renderGame(value);
  }

  showModal(isShow) {
    if (isShow) {
      this.modal.classList.remove('hidden-modal');
    } else {
      this.modal.classList.add('hidden-modal');
    }
  }

  onkeyUpInput(event) {
    const value = event.target.value;

    const letters = /^[NESOneso]+$/;
    if (!value.match(letters)) {
      event.target.value = value.slice(0, -1);
    }

    event.target.value = event.target.value.toUpperCase();
  }
}
