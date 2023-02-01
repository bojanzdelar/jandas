import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";

const clone = _logError((data) => {
  if (Array.isArray(data)) {
    return data.map((x) => clone(x));
  }
  if (data !== null && typeof data === "object") {
    return Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, clone(v)])
    );
  }
  return data;
}, {});

if (esMain(import.meta)) {
  parentPort.postMessage(clone(workerData.data));
}

export default clone;
