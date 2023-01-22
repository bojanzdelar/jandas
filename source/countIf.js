import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _convertStringToFunction from "./internal/_convertStringToFunction.js";
import count from "./count.js";
import filter from "./filter.js";

const countIf = (data, criterium) => count(filter(data, criterium));

if (esMain(import.meta)) {
  parentPort.postMessage(
    countIf(workerData.data, _convertStringToFunction(workerData.criterium))
  );
}

export default countIf;
