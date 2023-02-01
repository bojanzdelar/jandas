import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";
import sum from "./sum.js";
import count from "./count.js";

const average = _logError((data) => sum(data) / count(data), undefined);

if (esMain(import.meta)) {
  parentPort.postMessage(average(workerData.data));
}

export default average;
