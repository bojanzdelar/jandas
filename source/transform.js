import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import convertStringToFunction from "./internal/convertStringToFunction.js";

const transform = (data, transformation) => data.map(transformation);

if (esMain(import.meta)) {
  parentPort.postMessage(
    transform(
      workerData.data,
      convertStringToFunction(workerData.transformation)
    )
  );
}

export default transform;
