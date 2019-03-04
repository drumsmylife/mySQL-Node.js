var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Blink182!",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to buy?",
      choices: [
        "puck",
        "cd",
        "bread",
        "wrench",
        "ball",
        "Miracle",
        "ipad",
        "bat",
        "frozen pizza",
        "hammer"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Find that item":
        itemFinder();
        break;

      case "Find how much of that item is in stock":
        quantFind();
        break;

        default:
            console.log("Insufficient quantity");
            break;
      }
    });
}

