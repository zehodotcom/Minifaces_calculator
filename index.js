const fs = require("fs");
const { parse } = require("csv-parse");
const path = require("path");
const dataCSVArray = [];
const filesCarpetArray = [];
const miniFacesToDo = "miniFacesToDo.txt";
const csvFile = "a.csv";

fs.createReadStream(csvFile)
  .pipe(parse({ delimiter: ";", from_line: 1 }))
  .on("data", function (row) {
    dataCSVArray.push(row[0]);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    fs.readdir(path.join(__dirname, "minifaces"), function (err, files) {
      if (err) {
        console.log("Error reading directory:", err);
        return;
      }

      files.forEach(function (file) {
        const fileName = path.basename(file, path.extname(file));
        filesCarpetArray.push(fileName);
      });

      // Find matching values in both arrays
      const matchingValues = dataCSVArray.filter((value) =>
        filesCarpetArray.includes(value)
      );

      // Remove matching values from dataCSVArray
      matchingValues.forEach(function (value) {
        const index = dataCSVArray.indexOf(value);
        dataCSVArray.splice(index, 1);
      });

      // Write remaining values in dataCSVArray to miniFacesToDo.txt
      const dataString = dataCSVArray.join("\n");
      fs.writeFile(miniFacesToDo, dataString, function (err) {
        if (err) throw err;
        console.log("Data saved to file.");
      });
    });
  });
