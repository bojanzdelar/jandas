import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import convertStringToFunction from "./internal/convertStringToFunction.js";
import count from "./count.js";
import filter from "./filter.js";

const countIf = (data, criterium) => count(filter(data, criterium));

if (esMain(import.meta)) {
  parentPort.postMessage(
    countIf(workerData.data, convertStringToFunction(workerData.criterium))
  );
}

export default countIf;
