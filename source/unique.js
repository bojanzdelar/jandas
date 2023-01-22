import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";

const unique = (data, key) =>
  data.reduce(
    (acc, v) =>
      acc.some((element) => element[key] === v[key]) ? acc : [...acc, v],
    []
  );

if (esMain(import.meta)) {
  parentPort.postMessage(unique(workerData.data, workerData.key));
}

export default unique;
