import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import fs from "fs";
import clone from "./clone.js";

const writeJSON = (data, path) => {
  const stringified = JSON.stringify(data, null, 2);
  fs.writeFileSync(path, stringified, "utf-8");
  return clone(data);
};

if (esMain(import.meta)) {
  parentPort.postMessage(writeJSON(workerData.data, workerData.path));
}

export default writeJSON;
