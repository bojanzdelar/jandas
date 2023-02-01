import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";
import _createArray from "./internal/_createArray.js";

const append = _logError((data1, data2) => [
  ..._createArray(data1),
  ..._createArray(data2),
]);

if (esMain(import.meta)) {
  parentPort.postMessage(append(workerData.data1, workerData.data2));
}

export default append;
