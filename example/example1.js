import { writeJSON, unique, order, split, append } from "../source/index.js";
import {
  readCSV,
  writeCSV,
  transformCSVtoJSON,
  transformJSONtoCSV,
} from "../source/csv/index.js";

try {
  const data1 = await readCSV("data/cities.csv");
  const data2 = await transformCSVtoJSON(data1);
  await writeJSON(data2, "data/cities.json");
  const data3 = await unique(data2, "State");
  const data4 = await order(data3, "LatM");
  const [data5, data6] = await split(data4, (x) => x.LatM > 25);
  const data7 = await append(data6, data5);
  const data8 = await transformJSONtoCSV(data7);
  await writeCSV(data8, "data/test.csv");
  await writeJSON(data6, "data/abc.json");
} catch (err) {
  console.log(err);
}
