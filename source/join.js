import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "./internal/_logError.js";

const join = _logError((data1, data2, key1, key2 = key1) =>
  data1.reduce((acc, v) => {
    const el = data2.find((e) => e[key2] === v[key1]);
    return [...acc, el ? { ...v, ...el } : { ...v }];
  }, [])
);

if (esMain(import.meta)) {
  parentPort.postMessage(
    join(workerData.data1, workerData.data2, workerData.key1, workerData.key2)
  );
}

export default join;
