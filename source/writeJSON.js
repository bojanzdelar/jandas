import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";
import fs from "fs";
import clone from "./clone.js";

const writeJSON = _logError((data, path) => {
  const stringified = JSON.stringify(data, null, 2);
  fs.writeFileSync(path, stringified, "utf-8");
  return clone(data);
});

if (esMain(import.meta)) {
  parentPort.postMessage(writeJSON(workerData.data, workerData.path));
}

export default writeJSON;
