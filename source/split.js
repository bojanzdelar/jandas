import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import convertStringToFunction from "./internal/convertStringToFunction.js";
import filter from "./filter.js";

const split = (data, criterium) => [
  filter(data, criterium),
  filter(data, (x) => !criterium(x)),
];

if (esMain(import.meta)) {
  parentPort.postMessage(
    split(workerData.data, convertStringToFunction(workerData.criterium))
  );
}

export default split;
