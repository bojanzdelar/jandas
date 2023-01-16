import { writeJSON, join } from "../source/json.js";
import {
  readCSV,
  transformCSVtoJSON,
  transformJSONtoCSV,
} from "../source/csv.js";

try {
  const data1 = transformCSVtoJSON(await readCSV("data/join-1.csv"));
  const data2 = transformCSVtoJSON(await readCSV("data/join-2.csv"));
  const data3 = join(data1, data2, "ID");
  console.log(await writeJSON(data3, "data/join.json"));
} catch (err) {
  console.log(err);
}
