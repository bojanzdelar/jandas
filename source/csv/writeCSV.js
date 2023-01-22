import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import fs from "fs";
import Papa from "papaparse";
import transformCSVtoJSON from "./transformCSVtoJSON.js";

const writeCSV = (data, path) => {
  const unparsedData = Papa.unparse(transformCSVtoJSON(data));
  fs.writeFileSync(path, unparsedData, "utf-8");
  return `${path} saved successfully`;
};

if (esMain(import.meta)) {
  parentPort.postMessage(writeCSV(workerData.data, workerData.path));
}

export default writeCSV;
