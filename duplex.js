const { PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./animals.txt");
const writeStream = createWriteStream("./copy.txt");

const report = new PassThrough();

let totalBytes = 10;

report.on("data", (chunk) => {
  totalBytes += chunk.length;
  console.log("duplex successfully!  Total Bytes: ", totalBytes);
});

readStream.pipe(report).pipe(writeStream);
