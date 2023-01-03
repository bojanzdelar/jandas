import {
  readCSV,
  writeCSV,
  writeJSON,
  unique,
  order,
  split,
  append,
} from "../source/jandas.js";

try {
  const data1 = await readCSV("data/cities.csv");
  console.log(data1);
  const data2 = unique(data1, "State");
  const data3 = order(data2, "LatM");
  const [data4, data5] = split(data3, (x) => x.LatM > 25);
  const data6 = append(data5, data4);
  console.log(await writeCSV(data6, "data/test.csv"));
  console.log(await writeJSON(data5, "data/abc.json"));
} catch (err) {
  console.log(err);
}
