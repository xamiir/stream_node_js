const decompress = require("decompress");

decompress("data.zip", "disk");
try {
  console.log("Unzipped successfully! Check disk folder.");
} catch (err) {
  console.log(err);
}
