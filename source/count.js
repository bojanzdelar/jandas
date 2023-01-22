import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";

const count = (data) => data.length;

if (esMain(import.meta)) {
  parentPort.postMessage(count(workerData.data));
}

export default count;
