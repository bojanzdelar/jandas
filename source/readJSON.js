import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";
import fs from "fs";

const readJSON = _logError((path) => {
  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data);
});

if (esMain(import.meta)) {
  parentPort.postMessage(readJSON(workerData.path));
}

export default readJSON;
