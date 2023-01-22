import {
  readJSON,
  filter,
  transform,
  countIf,
  sum,
  average,
} from "../source/index.js";

try {
  const criterium = (x) => x.LatD > 45;
  const criterium2 = (x) => x.State === "WA";
  const transformation = (x) => ({ ...x, LatD: x.LatD + 100 });
  const data1 = await readJSON("data/cities.json");
  const data2 = await filter(data1, criterium);
  const data3 = await transform(data2, transformation);
  console.log("countIf: " + (await countIf(data2, criterium2)));
  console.log("sum: " + (await sum(data3.map((x) => x.LatM))));
  console.log("average: " + (await average(data3.map((x) => x.LatM))));
} catch (err) {
  console.log(err);
}
