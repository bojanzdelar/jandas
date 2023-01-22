import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import convertStringToFunction from "./internal/convertStringToFunction.js";

const filter = (data, criterium) => data.filter(criterium);

if (esMain(import.meta)) {
  parentPort.postMessage(
    filter(workerData.data, convertStringToFunction(workerData.criterium))
  );
}

export default filter;
