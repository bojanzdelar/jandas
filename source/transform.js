import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";
import _convertStringToFunction from "./internal/_convertStringToFunction.js";

const transform = _logError((data, transformation) => data.map(transformation));

if (esMain(import.meta)) {
  parentPort.postMessage(
    transform(
      workerData.data,
      _convertStringToFunction(workerData.transformation)
    )
  );
}

export default transform;
