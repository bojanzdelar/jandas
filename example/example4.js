import { writeJSON, join } from "../source/index.js";
import {
  readCSV,
  transformCSVtoJSON,
  transformJSONtoCSV,
} from "../source/csv/index.js";

try {
  const [data1, data2] = await Promise.all([
    transformCSVtoJSON(await readCSV("data/join-1.csv")),
    transformCSVtoJSON(await readCSV("data/join-2.csv")),
  ]);
  const data3 = await join(data1, data2, "ID");
  console.log(await writeJSON(data3, "data/join.json"));
} catch (err) {
  console.log(err);
}
