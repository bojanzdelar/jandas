import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";

const count = _logError((data) => data.length, undefined);

if (esMain(import.meta)) {
  parentPort.postMessage(count(workerData.data));
}

export default count;
