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
      switch (answer.response) {
      case "idPuck":
      puckIt();
      break;

      case "idCd":
      cdIt();
      break;

      case "idBread":
      breadIt();
      break;

      case "idWrench":
      wrenchIt();
      break;

      case "idBall":
      ballIt();
      break;

      case "idMiracle":
      miracleYah();
      break;

      case "idIpad":
      ipadZ();
      break;

      case "idBat":
      batterUp();
      break;

      case "idFrozenPizza":
      frozenZa();
      break;

      case "idHammer":
      hammerIt();
      break;
       
      }
    });
}
