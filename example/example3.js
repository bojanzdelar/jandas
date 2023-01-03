import { readCSV, writeJSON, upsert } from "../source/jandas.js";

try {
  const data1 = await readCSV("data/upsert-1.csv");
  const data2 = await readCSV("data/upsert-2.csv");
  const data3 = upsert(data1, data2, "ID");
  console.log(await writeJSON(data3, "data/upsert.json"));
} catch (err) {
  console.log(err);
}
