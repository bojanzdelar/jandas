import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import convertStringToFunction from "./internal/convertStringToFunction.js";

const plotSVG = (data, path, handler) => {};

if (esMain(import.meta)) {
  parentPort.postMessage(
    plotSVG(
      workerData.data,
      workerData.path,
      convertStringToFunction(workerData.handler)
    )
  );
}

export default plotSVG;
