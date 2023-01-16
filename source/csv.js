import fs from "fs";
import Papa from "papaparse";

const transpose = (matrix) =>
  matrix[0].map((col, i) => matrix.map((row) => row[i]));

const zip = (a, b) => a.map((k, i) => [k, b[i]]);

export const transformCSVtoJSON = (data) => {
  const keys = Object.keys(data);
  const values = transpose(Object.values(data));

  return values.reduce((acc, v) => {
    const obj = Object.fromEntries(zip(keys, v));
    return [...acc, obj];
  }, []);
};

export const transformJSONtoCSV = (data) => {
  const keys = Object.keys(data[0]);
  const result = keys.reduce((acc, v) => ({ ...acc, [v]: [] }), {});

  return data.reduce((acc, v) => {
    for (let [key, value] of Object.entries(v)) {
      acc[key].push(value);
    }
    return acc;
  }, result);
};

export const readCSV = async (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }

      Papa.parse(data, {
        header: true,
        transformHeader(h) {
          return h.trim();
        },
        transform(v) {
          return v.trim();
        },
        dynamicTyping: true,
        skipEmptyLines: true,
        complete(results) {
          resolve(transformJSONtoCSV(results.data));
        },
        error(err) {
          reject(err);
        },
      });
    });
  });

export const writeCSV = async (data, path) =>
  new Promise((resolve, reject) => {
    try {
      data = Papa.unparse(transformCSVtoJSON(data));
    } catch (err) {
      reject(err);
    }
    fs.writeFile(path, data, "utf-8", (err) => {
      if (err) {
        reject(err);
      }
      resolve(`${path} saved successfully`);
    });
  });
