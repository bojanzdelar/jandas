import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";
import _convertStringToFunction from "./internal/_convertStringToFunction.js";

const filter = _logError((data, criterium) => data.filter(criterium));

if (esMain(import.meta)) {
  parentPort.postMessage(
    filter(workerData.data, _convertStringToFunction(workerData.criterium))
  );
}

export default filter;
