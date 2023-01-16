import fs from "fs";
import Papa from "papaparse";

const createArray = (a) => (Array.isArray(a) ? a : [a]);

export const readJSON = async (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      try {
        resolve(JSON.parse(data));
      } catch (err) {
        reject(err);
      }
    });
  });

export const writeJSON = async (data, path) =>
  new Promise((resolve, reject) => {
    try {
      data = JSON.stringify(data, null, 2);
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

export const plotJSON = () => {};

export const filter = (data, criterium) => data.filter(criterium);

export const transform = (data, transformation) => data.map(transformation);

export const count = (data) => data.length;

export const countIf = (data, criterium) => count(filter(data, criterium));

export const sum = (data) => data.reduce((acc, v) => acc + v, 0);

export const average = (data) => sum(data) / count(data);

export const order = (
  data,
  key,
  ascending = true,
  comparator = (a, b) => a - b
) => {
  const sorted = [...data].sort((a, b) => comparator(a[key], b[key]));
  return ascending ? sorted : sorted.reverse();
};

export const unique = (data, key) =>
  data.reduce(
    (acc, v) =>
      acc.some((element) => element[key] === v[key]) ? acc : [...acc, v],
    []
  );

export const join = (data1, data2, key1, key2 = key1) =>
  data1.reduce((acc, v) => {
    const el = data2.find((e) => e[key2] === v[key1]);
    return [...acc, el ? { ...v, ...el } : { ...v }];
  }, []);

export const append = (data1, data2) => [
  ...createArray(data1),
  ...createArray(data2),
];

export const replace = (data, value, index) => [
  ...data.slice(0, index),
  value,
  ...data.slice(index + 1, data.length),
];

export const upsert = (data1, data2, key1, key2 = key1) =>
  data2.reduce(
    (acc, v) => {
      const index = acc.findIndex((e) => e[key1] === v[key2]);
      return index != -1 ? replace(acc, v, index) : append(acc, v);
    },
    [...data1]
  );

export const split = (data, criterium) => [
  filter(data, criterium),
  filter(data, (x) => !criterium(x)),
];
