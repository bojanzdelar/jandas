import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";

const sum = _logError((data) => data.reduce((acc, v) => acc + v, 0), undefined);

if (esMain(import.meta)) {
  parentPort.postMessage(sum(workerData.data));
}

export default sum;
