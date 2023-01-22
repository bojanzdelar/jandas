import executeWorker from "./internal/executeWorker.js";
import convertFunctionToString from "./internal/convertFunctionToString.js";

export const readJSON = (path) =>
  executeWorker("../source/readJSON.js", { path });

export const writeJSON = (data, path) =>
  executeWorker("../source/writeJSON.js", { data, path });

export const plotSVG = (data, path, handler) =>
  executeWorker("../source/plotSVG.js", {
    data,
    path,
    handler: convertFunctionToString(handler),
  });

export const filter = (data, criterium) =>
  executeWorker("../source/filter.js", {
    data,
    criterium: convertFunctionToString(criterium),
  });

export const transform = (data, transformation) =>
  executeWorker("../source/transform.js", {
    data,
    transformation: convertFunctionToString(transformation),
  });

export const count = (data) => executeWorker("../source/count.js", { data });

export const countIf = (data, criterium) =>
  executeWorker("../source/countIf.js", {
    data,
    criterium: convertFunctionToString(criterium),
  });

export const sum = (data) => executeWorker("../source/sum.js", { data });

export const average = (data) =>
  executeWorker("../source/average.js", { data });

export const order = (
  data,
  key,
  ascending = true,
  comparator = (a, b) => a - b
) =>
  executeWorker("../source/order.js", {
    data,
    key,
    ascending,
    comparator: convertFunctionToString(comparator),
  });

export const unique = (data, key) =>
  executeWorker("../source/unique.js", { data, key });

export const join = (data1, data2, key1, key2 = key1) =>
  executeWorker("../source/join.js", { data1, data2, key1, key2 });

export const append = (data1, data2) =>
  executeWorker("../source/append.js", { data1, data2 });

export const replace = (data, value, index) =>
  executeWorker("../source/replace.js", { data, value, index });

export const upsert = (data1, data2, key1, key2 = key1) =>
  executeWorker("../source/upsert.js", { data1, data2, key1, key2 });

export const split = (data, criterium) =>
  executeWorker("../source/split.js", {
    data,
    criterium: convertFunctionToString(criterium),
  });
