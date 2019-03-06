CREATE DATABASE bamazon_DB;
CREATE TABLE products (
item_id INT NOT NULL,
product_name VARCHAR(45) NULL,
department_name VARCHAR(45) NULL,
price DECIMAL,
stock_quantity INT NOT NULL
);
SELECT * 
FROM products;

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (0,"puck","sports",5.00,30);
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (1,"cd","music",5.00,60);
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (2,"bread","food",3.00,50);
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (3,"wrench","tools",10.00,100);
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (4,"ball","sports",4.00,80);
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (5,"Miracle","movies",7.00,40);
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (6,"ipad","electronics",140,75);
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (7,"bat","sports",20.00,30);
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (8,"frozen pizza","food",6.00,90);
INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (9,"hammer","tools",10.00,30);