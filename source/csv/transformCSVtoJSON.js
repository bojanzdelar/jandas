import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "../internal/_logError.js";
import _transpose from "../internal/_transpose.js";
import _zip from "../internal/_zip.js";

const transformCSVtoJSON = _logError((data) => {
  const keys = Object.keys(data);
  const values = _transpose(Object.values(data));

  return values.reduce(
    (acc, v) => [...acc, Object.fromEntries(_zip(keys, v))],
    []
  );
});

if (esMain(import.meta)) {
  parentPort.postMessage(transformCSVtoJSON(workerData.data));
}

export default transformCSVtoJSON;
