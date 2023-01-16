import { writeJSON, unique, order, split, append } from "../source/json.js";
import {
  readCSV,
  writeCSV,
  transformCSVtoJSON,
  transformJSONtoCSV,
} from "../source/csv.js";

try {
  const data1 = await readCSV("data/cities.csv");
  console.log(await writeJSON(transformCSVtoJSON(data1), "data/cities.json"));
  const data2 = unique(transformCSVtoJSON(data1), "State");
  const data3 = order(data2, "LatM");
  const [data4, data5] = split(data3, (x) => x.LatM > 25);
  const data6 = transformJSONtoCSV(append(data5, data4));
  console.log(await writeCSV(data6, "data/test.csv"));
  console.log(await writeJSON(data5, "data/abc.json"));
} catch (err) {
  console.log(err);
}
