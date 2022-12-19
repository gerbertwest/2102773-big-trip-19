import {createElement} from '../render.js';

function createTripIventsListTemplate() {

  return '<ul class="trip-events__list"></ul>';
}

export default class TripEventsView {
  #element = null;

  get template() {
    return createTripIventsListTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
