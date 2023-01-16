import { writeJSON, upsert } from "../source/json.js";
import {
  readCSV,
  transformCSVtoJSON,
  transformJSONtoCSV,
} from "../source/csv.js";

try {
  const data1 = transformCSVtoJSON(await readCSV("data/upsert-1.csv"));
  const data2 = transformCSVtoJSON(await readCSV("data/upsert-2.csv"));
  const data3 = upsert(data1, data2, "ID");
  console.log(await writeJSON(data3, "data/upsert.json"));
} catch (err) {
  console.log(err);
}
