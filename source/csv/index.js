import _executeWorker from "../internal/_executeWorker.js";

export const transformCSVtoJSON = (data) =>
  _executeWorker("../source/csv/transformCSVtoJSON.js", { data });

export const transformJSONtoCSV = (data) =>
  _executeWorker("../source/csv/transformJSONtoCSV.js", { data });

export const readCSV = (path) =>
  _executeWorker("../source/csv/readCSV.js", { path });

export const writeCSV = (data, path) =>
  _executeWorker("../source/csv/writeCSV.js", { data, path });
