import { Observable } from "rxjs";

import { getRandomArbitrary, eachValueIsNumber } from "../helpers/functions";

const dataObservable = new Observable((subscriber) => {
  const DATA_IS_NOT_AVAILABLE = "N/A";
  const MIN_EMITTING_INTERVAL = 1000;
  const MIN_SEND_DATA_TIME = 100;
  const MAX_SEND_DATA_TIME = 2000;
  const MAX_DATA_WAITING_TIME = 1000;

  let isFirstEmitting = true;
  let allowEmitting = false;

  const data = {
    temperature: null,
    airPressure: null,
    humidity: null,
  };

  let emittingInterval = setInterval(() => {
    allowEmitting = true;
  }, MIN_EMITTING_INTERVAL);

  const emitData = (dataPropName, minValue, maxValue) => {
    const randomTime = getRandomArbitrary(
      MIN_SEND_DATA_TIME,
      MAX_SEND_DATA_TIME
    );

    setTimeout(function () {
      if (randomTime > MAX_DATA_WAITING_TIME) {
        data[dataPropName] = DATA_IS_NOT_AVAILABLE;
      } else {
        data[dataPropName] = getRandomArbitrary(minValue, maxValue);
      }

      if (!allowEmitting || (isFirstEmitting && !eachValueIsNumber(data))) {
        emitData(dataPropName, minValue, maxValue);
        return;
      }

      clearInterval(emittingInterval);
      emittingInterval = setInterval(() => {
        allowEmitting = true;
      }, MIN_EMITTING_INTERVAL);

      isFirstEmitting = false;
      allowEmitting = false;
      subscriber.next(data);

      emitData(dataPropName, minValue, maxValue);
    }, randomTime);
  };

  emitData("temperature", 17, 23);
  emitData("airPressure", 17, 23);
  emitData("humidity", 17, 23);
});

export default dataObservable;
