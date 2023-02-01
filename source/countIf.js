import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";
import _convertStringToFunction from "./internal/_convertStringToFunction.js";
import count from "./count.js";
import filter from "./filter.js";

const countIf = _logError(
  (data, criterium) => count(filter(data, criterium)),
  undefined
);

if (esMain(import.meta)) {
  parentPort.postMessage(
    countIf(workerData.data, _convertStringToFunction(workerData.criterium))
  );
}

export default countIf;
