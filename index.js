//read content from 5 files and write it to a single file.

var fs = require("node:fs");
const { appendFile } = require("node:fs/promises");

fs.writeFileSync("data/text1.txt", "Enjoy the little things in life ", "utf8");
fs.writeFileSync("data/text2.txt", "because one day ", "utf8");
fs.writeFileSync("data/text3.txt", "you will look back and realize ", "utf8");
fs.writeFileSync("data/text4.txt", "they were the big things. ", "utf8");
fs.writeFileSync("data/text5.txt", "            -kurt vonnegut      ", "utf8");

const files = [
  "data/text1.txt",
  "data/text2.txt",
  "data/text3.txt",
  "data/text4.txt",
  "data/text5.txt",
];

const target = "data/output.txt";

try {
  files.forEach(async (f) => {
    const data = fs.readFileSync(f, "utf8");
    await appendFile(target, data, (err) => {
      if (err) {
        console.log("Error in append" + err);
      }
      console.log(`content append from ${f} to ${target}`);
    });
  });
} catch (err) {
  console.log("Error" + err);
  return;
}
