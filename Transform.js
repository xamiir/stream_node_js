const { WriteStream, ReadStream } = require("fs");

const { Transform } = require("stream");

var readStream = ReadStream("./input.txt");

var writeStream = WriteStream("./output.txt");

var transformStream = () => {
  return new Transform({
    transform(chunk, enc, callback) {
      const upperCaseChunk = chunk.toString().toUpperCase();
      callback(null, upperCaseChunk);
    },
  });
};

const upperCaseChunk = transformStream();

readStream.pipe(upperCaseChunk).pipe(writeStream);

console.log("success transform");
