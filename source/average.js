import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import sum from "./sum.js";
import count from "./count.js";

const average = (data) => sum(data) / count(data);

if (esMain(import.meta)) {
  parentPort.postMessage(average(workerData.data));
}

export default average;
