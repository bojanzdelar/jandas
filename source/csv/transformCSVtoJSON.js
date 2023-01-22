import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import transpose from "../internal/transpose.js";
import zip from "../internal/zip.js";

const transformCSVtoJSON = (data) => {
  const keys = Object.keys(data);
  const values = transpose(Object.values(data));

  return values.reduce(
    (acc, v) => [...acc, Object.fromEntries(zip(keys, v))],
    []
  );
};

if (esMain(import.meta)) {
  parentPort.postMessage(transformCSVtoJSON(workerData.data));
}

export default transformCSVtoJSON;
