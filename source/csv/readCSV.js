import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import fs from "fs";
import Papa from "papaparse";
import transformJSONtoCSV from "./transformJSONtoCSV.js";

const readCSV = (path) => {
  const data = fs.readFileSync(path, "utf-8");
  const parsedData = Papa.parse(data, {
    header: true,
    transformHeader(h) {
      return h.trim();
    },
    transform(v) {
      return v.trim();
    },
    dynamicTyping: true,
    skipEmptyLines: true,
  });
  return transformJSONtoCSV(parsedData.data);
};

if (esMain(import.meta)) {
  parentPort.postMessage(readCSV(workerData.path));
}

export default readCSV;
