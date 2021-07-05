export default class Game {
  constructor(renderGame) {
    this.renderGame = renderGame;

    this.modal = document.querySelector('#modal-initial');
    this.modalSuccess = document.querySelector('#modal-success');
    this.textResult = document.querySelector('#result');
    this.form = document.querySelector('#form-initial');
    this.input = document.querySelector('#input-path');
    this.inputAnimation = document.querySelector('#input-animation');
    this.buttonContinue = document.querySelector('#button-continue');

    this.submitForm = this.submitForm.bind(this);
    this.onkeyUpInput = this.onkeyUpInput.bind(this);
    this.clickContinue = this.clickContinue.bind(this);
  }

  init() {
    if (this.form) {
      this.form.addEventListener('submit', this.submitForm);
    }
    if (this.input) {
      this.input.addEventListener('keyup', this.onkeyUpInput);
    }
    if (this.buttonContinue) {
      this.buttonContinue.addEventListener('click', this.clickContinue);
    }
  }

  submitForm(event) {
    if (event) {
      event.preventDefault();
    }

    const value = this.input.value;
    this.input.value = '';

    if (this.inputAnimation.checked) {
      this.showModal(this.modal, false);
    }

    this.renderGame(value, this.inputAnimation.checked, this);
  }

  showModal(modal, isShow) {
    if (isShow) {
      modal.classList.remove('hidden-modal');
    } else {
      modal.classList.add('hidden-modal');
    }
  }

  clickContinue() {
    this.showModal(this.modal, false);
    this.showModal(this.modalSuccess, false);
  }

  onkeyUpInput(event) {
    const value = event.target.value;

    const letters = /^[NESOneso]+$/;
    if (!value.match(letters)) {
      event.target.value = value.slice(0, -1);
    }

    event.target.value = event.target.value.toUpperCase();
  }

  setResult(amount) {
    this.textResult.innerHTML = `Você capturou ${amount} pokemons e ganhou uma insigna`;
  }

  showModalSuccess(amountPokemons) {
    this.setResult(amountPokemons);
    this.showModal(this.modalSuccess, true);
  }
}
