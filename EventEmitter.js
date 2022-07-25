export class EventEmitter {
  constructor() {
    this._listeners = [];
  }

  hasListener(type, handler) {
    for (let i = 0; i < this._listeners.length; i++) {
      if (this._listeners[i].type === type && this._listeners[i].handler === handler) {
        return true;
      }
    }
    return false;
  }

  on(type, handler) {
    if (!this.hasListener(type, handler)) {
      this._listeners.push({ type: type, handler: handler });
      return true;
    }
    return false;
  }

  off(type, handler) {
    if (this.hasListener(type, handler)) {
      for (let i = 0; i < this._listeners.length; i++) {
        if (this._listeners[i].type === type && this._listeners[i].handler === handler) {
          this._listeners.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }

  emit(type, sender) {
    for (let i = 0; i < this._listeners.length; i++) {
      if (this._listeners[i].type === type) {
        this._listeners[i].handler(sender);
      }
    }
  }
}
