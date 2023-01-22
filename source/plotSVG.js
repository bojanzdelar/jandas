import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _convertStringToFunction from "./internal/_convertStringToFunction.js";

const plotSVG = (data, path, handler) => {};

if (esMain(import.meta)) {
  parentPort.postMessage(
    plotSVG(
      workerData.data,
      workerData.path,
      _convertStringToFunction(workerData.handler)
    )
  );
}

export default plotSVG;
