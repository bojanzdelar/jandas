import esMain from "es-main";
import { workerData, parentPort } from "worker_threads";
import _logError from "../internal/_logError.js";

const transformJSONtoCSV = _logError((data) => {
  const keys = Object.keys(data[0]);
  const result = keys.reduce((acc, v) => ({ ...acc, [v]: [] }), {});

  return data.reduce(
    (acc, v) =>
      Object.entries(v).reduce(
        (acc2, [key, value]) => ({ ...acc2, [key]: [...acc2[key], value] }),
        acc
      ),
    result
  );
}, {});

if (esMain(import.meta)) {
  parentPort.postMessage(transformJSONtoCSV(workerData.data));
}

export default transformJSONtoCSV;
