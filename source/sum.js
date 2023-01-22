import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";

const sum = (data) => data.reduce((acc, v) => acc + v, 0);

if (esMain(import.meta)) {
  parentPort.postMessage(sum(workerData.data));
}

export default sum;
