import { writeJSON, upsert } from "../source/index.js";
import {
  readCSV,
  transformCSVtoJSON,
  transformJSONtoCSV,
} from "../source/csv/index.js";

try {
  const [data1, data2] = await Promise.all([
    transformCSVtoJSON(await readCSV("data/upsert-1.csv")),
    transformCSVtoJSON(await readCSV("data/upsert-2.csv")),
  ]);
  const data3 = await upsert(data1, data2, "ID");
  await writeJSON(data3, "data/upsert.json");
} catch (err) {
  console.log(err);
}
