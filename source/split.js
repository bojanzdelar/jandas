import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";
import _convertStringToFunction from "./internal/_convertStringToFunction.js";
import filter from "./filter.js";

const split = _logError((data, criterium) => [
  filter(data, criterium),
  filter(data, (x) => !criterium(x)),
]);

if (esMain(import.meta)) {
  parentPort.postMessage(
    split(workerData.data, _convertStringToFunction(workerData.criterium))
  );
}

export default split;
