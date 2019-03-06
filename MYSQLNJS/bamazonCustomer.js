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
      name: "id",
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
      switch (answer.id) {
      case "puck":
      puckIt();
      break;

      case "cd":
      cdIt();
      break;

      case "bread":
      breadIt();
      break;

      case "wrench":
      wrenchIt();
      break;

      case "ball":
      ballIt();
      break;

      case "Miracle":
      miracleYah();
      break;

      case "ipad":
      ipadZ();
      break;

      case "bat":
      batterUp();
      break;

      case "frozen pizza":
      frozenZa();
      break;

      case "hammer":
      hammerIt();
      break;
       
      }
    });
}
function puckIt() {
    inquirer
            .prompt({
              name: "quantity",
              type: "input",
              message: "How many items would you like to purchase? ",
              validate: function(answer) {
              var query = "SELECT stock_quantity FROM products WHERE item_id = 'answer' ";
              connection.query(query, { stock_quantity: answer.stock_quantity }, function(err,res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("stock_quantity: " + res[0].stock_quantity + " ");
                  } 
                  if (answer < res[0].stock_quantity) {
                    console.log( "added to your cart " + res[0].stock_quantity + " you got some pucks")
                  }


                if (answer > res[0].stock_quantity) {
                    console.log( "NOPE we only have " + res[0].stock_quantity + " of that item")
                  }
                  runSearch();
                  connection.end();
                })
              }
            })
        };
    
              