import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import createArray from "./internal/createArray.js";

const append = (data1, data2) => [...createArray(data1), ...createArray(data2)];

if (esMain(import.meta)) {
  parentPort.postMessage(append(workerData.data1, workerData.data2));
}

export default append;
