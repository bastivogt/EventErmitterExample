export class EventEmitter {
  constructor() {
    this._listeners = [];
  }

  /**
   * Prüft ob ein listener bereits existiert.
   * @param {String} type 
   * @param {Function} handler 
   * @returns Boolean
   */
  hasListener(type, handler) {
    for (let i = 0; i < this._listeners.length; i++) {
      if (this._listeners[i].type === type && this._listeners[i].handler === handler) {
        return true;
      }
    }
    return false;
  }

  /**
   * Handelt ein Event.
   * @param {String} type 
   * @param {Function} handler 
   * @returns Boolean
   */
  on(type, handler) {
    if (!this.hasListener(type, handler)) {
      this._listeners.push({ type: type, handler: handler });
      return true;
    }
    return false;
  }

  /**
   * Löscht ein Event mit handler.
   * @param {String} type 
   * @param {Function} handler 
   * @returns Boolean
   */
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

  /**
   * Feuert ein Event.
   * @param {String} type 
   * @param {Object} sender 
   */
  emit(type, sender) {
    for (let i = 0; i < this._listeners.length; i++) {
      if (this._listeners[i].type === type) {
        this._listeners[i].handler(sender);
      }
    }
  }
}
