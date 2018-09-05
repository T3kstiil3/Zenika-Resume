export default class Controller {

  constructor(components, events) {
    this.store = components.store;
    this.events = events;

    this.events.on('action:init', this.onInit.bind(this));
    this.events.on('action:update', this.onUpdate.bind(this));
    this.events.on('action:sync', this.onSync.bind(this));
  }

  on(events, callback) {
    const names = events.split(/\s*,\s*/);

    names.forEach(event => this.events.on(event, callback));
  }

  dispatch(name, data) {
    console.log(name, data);
    this.events.emit(name, data);
  }

  onInit({ id, secret }) {
    this.store.load(id, secret);
  }

  onUpdate(document) {
    this.store.update(document);
  }

  onSync() {
    this.store.sync();
  }
}
