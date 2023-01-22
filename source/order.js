import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _convertStringToFunction from "./internal/_convertStringToFunction.js";

const order = (data, key, ascending = true, comparator = (a, b) => a - b) => {
  const sorted = [...data].sort((a, b) => comparator(a[key], b[key]));
  return ascending ? sorted : sorted.reverse();
};

if (esMain(import.meta)) {
  parentPort.postMessage(
    order(
      workerData.data,
      workerData.key,
      workerData.ascending,
      _convertStringToFunction(workerData.comparator)
    )
  );
}

export default order;
