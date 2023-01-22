import executeWorker from "../internal/executeWorker.js";

export const transformCSVtoJSON = (data) =>
  executeWorker("../source/csv/transformCSVtoJSON.js", { data });

export const transformJSONtoCSV = (data) =>
  executeWorker("../source/csv/transformJSONtoCSV.js", { data });

export const readCSV = (path) =>
  executeWorker("../source/csv/readCSV.js", { path });

export const writeCSV = (data, path) =>
  executeWorker("../source/csv/writeCSV.js", { data, path });
