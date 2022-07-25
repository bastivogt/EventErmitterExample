import { EventEmitter } from "./EventEmitter.js";
export class Counter extends EventEmitter {
  // Events
  static COUNTER_START = "counterStart";
  static COUNTER_CHANGE = "counterChange";
  static COUNTER_FINISH = "counterFinish";

  constructor(start = 0, finish = 10, step = 1) {
    super();
    this.start = start;
    this.finish = finish;
    this.step = step;
    this._count = start;
  }

  getCount() {
    return this._count;
  }

  run() {
    this._count = this.start;
    this.emit(Counter.COUNTER_START, this);
    for (this._count; this._count < this.finish; this._count += this.step) {
      this.emit(Counter.COUNTER_CHANGE, this);
    }
    this.emit(Counter.COUNTER_FINISH, this);
  }
}
