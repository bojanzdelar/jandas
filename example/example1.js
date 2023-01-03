import {
  readJSON,
  filter,
  transform,
  countIf,
  sum,
  average,
} from "../source/jandas.js";

try {
  const criterium = (x) => x.LatD > 45;
  const criterium2 = (x) => x.State === "WA";
  const transformation = (x) => ({ ...x, LatD: x.LatD + 100 });
  const data1 = await readJSON("data/cities.json");
  const data2 = filter(data1, criterium);
  const data3 = transform(data2, transformation);
  console.log("countIf: " + countIf(data2, criterium2));
  console.log("sum: " + sum(data3, "LatM"));
  console.log("average: " + average(data3, "LatM"));
} catch (err) {
  console.log(err);
}
