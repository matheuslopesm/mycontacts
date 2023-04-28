export default class EventManager {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners(event).push(listener);
  }

  emit(event, payload) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners[event];

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove,
    );

    this.listeners[event] = filteredListeners;
  }
}

const toastEventManager = new EventManager();

function addToast(payload) {
  console.log('addtoast listener', (payload));
}

toastEventManager.on('addtoast', addToast);

toastEventManager.emit('addtoast', { type: 'danger', text: 'Texto' });

toastEventManager.removeListener('addtoast', addToast);
