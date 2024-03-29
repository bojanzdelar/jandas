import { Worker } from "worker_threads";

const _executeWorker = (filename, data) =>
  new Promise((resolve, reject) => {
    const worker = new Worker(filename, { workerData: data });
    worker.on("message", resolve);
    worker.on("error", reject);
  });

export default _executeWorker;
