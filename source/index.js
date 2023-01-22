import _executeWorker from "./internal/_executeWorker.js";
import _convertFunctionToString from "./internal/_convertFunctionToString.js";

export const readJSON = (path) =>
  _executeWorker("../source/readJSON.js", { path });

export const writeJSON = (data, path) =>
  _executeWorker("../source/writeJSON.js", { data, path });

export const plotSVG = (data, path, handler) =>
  _executeWorker("../source/plotSVG.js", {
    data,
    path,
    handler: _convertFunctionToString(handler),
  });

export const filter = (data, criterium) =>
  _executeWorker("../source/filter.js", {
    data,
    criterium: _convertFunctionToString(criterium),
  });

export const transform = (data, transformation) =>
  _executeWorker("../source/transform.js", {
    data,
    transformation: _convertFunctionToString(transformation),
  });

export const count = (data) => _executeWorker("../source/count.js", { data });

export const countIf = (data, criterium) =>
  _executeWorker("../source/countIf.js", {
    data,
    criterium: _convertFunctionToString(criterium),
  });

export const sum = (data) => _executeWorker("../source/sum.js", { data });

export const average = (data) =>
  _executeWorker("../source/average.js", { data });

export const order = (
  data,
  key,
  ascending = true,
  comparator = (a, b) => a - b
) =>
  _executeWorker("../source/order.js", {
    data,
    key,
    ascending,
    comparator: _convertFunctionToString(comparator),
  });

export const unique = (data, key) =>
  _executeWorker("../source/unique.js", { data, key });

export const join = (data1, data2, key1, key2 = key1) =>
  _executeWorker("../source/join.js", { data1, data2, key1, key2 });

export const append = (data1, data2) =>
  _executeWorker("../source/append.js", { data1, data2 });

export const replace = (data, value, index) =>
  _executeWorker("../source/replace.js", { data, value, index });

export const upsert = (data1, data2, key1, key2 = key1) =>
  _executeWorker("../source/upsert.js", { data1, data2, key1, key2 });

export const split = (data, criterium) =>
  _executeWorker("../source/split.js", {
    data,
    criterium: _convertFunctionToString(criterium),
  });
