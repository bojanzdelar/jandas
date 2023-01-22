import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _convertStringToFunction from "./internal/_convertStringToFunction.js";

const filter = (data, criterium) => data.filter(criterium);

if (esMain(import.meta)) {
  parentPort.postMessage(
    filter(workerData.data, _convertStringToFunction(workerData.criterium))
  );
}

export default filter;
