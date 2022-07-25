import { Counter } from "./Counter.js";

const counter = new Counter();

counter.on(Counter.COUNTER_START, (sender) => {
  console.log(`${Counter.COUNTER_START} count: ${sender.getCount()}`);
});


counter.on(Counter.COUNTER_CHANGE, (sender) => {
  console.log(`${Counter.COUNTER_CHANGE} count: ${sender.getCount()}`);
});

const counter_finishHandler = (sender) => {
  console.log(`${Counter.COUNTER_FINISH} count: ${sender.getCount()}`);
};

counter.on(Counter.COUNTER_FINISH, counter_finishHandler);
counter.on(Counter.COUNTER_FINISH, counter_finishHandler);
counter.on(Counter.COUNTER_FINISH, (sender) => {console.log("FINISH")});

counter.off(Counter.COUNTER_FINISH, counter_finishHandler);



counter.run();

console.log(counter._listeners);
