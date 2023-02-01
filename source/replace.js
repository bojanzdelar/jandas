import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";

const replace = _logError((data, value, index) => [
  ...data.slice(0, index),
  value,
  ...data.slice(index + 1, data.length),
]);

if (esMain(import.meta)) {
  parentPort.postMessage(
    replace(workerData.data, workerData.value, workerData.index)
  );
}

export default replace;
