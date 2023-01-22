import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import replace from "./replace.js";

const upsert = (data1, data2, key1, key2 = key1) =>
  data2.reduce(
    (acc, v) => {
      const index = acc.findIndex((e) => e[key1] === v[key2]);
      return index != -1 ? replace(acc, v, index) : append(acc, v);
    },
    [...data1]
  );

if (esMain(import.meta)) {
  parentPort.postMessage(
    upsert(workerData.data1, workerData.data2, workerData.key1, workerData.key2)
  );
}

export default upsert;
