const readline = require("readline");
const fs = require("fs");
const controllers = require("./controller/employeeController");

const parseDocumentData = controllers.parseDocumentData;
const IterationOfNames = controllers.IterationOfNames;

// Creates the interface for reading data
var readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// reads the path to the file to work with(default: test/employees.txt)
readInterface.question("Welcome to ACME's App => ", (path) => {
  let filename = path == "" ? "./documents/employees.txt" : path;
  try {
    //read the  ~/documents/employees.txt file
    fs.readFile(filename, "utf8", function (error, data) {
      if (error) {
        console.log("There is an Error", error.message);
        readInterface.close();
        throw error;
      }

      const employeesArray = parseDocumentData(data);
      //run the function to determine the match for each employee
      IterationOfNames(employeesArray);
      readInterface.close();
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File not found");
    } else {
      throw error;
    }
  }
});

//  Displays a Dialog and exit the process

readInterface.on("close", function () {
  console.log("\n\n Interface closed");
  process.exit(0);
});
