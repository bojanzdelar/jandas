import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import fs from "fs";

const readJSON = (path) => {
  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data);
};

if (esMain(import.meta)) {
  parentPort.postMessage(readJSON(workerData.path));
}

export default readJSON;
