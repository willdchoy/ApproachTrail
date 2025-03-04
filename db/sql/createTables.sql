CREATE TABLE site_user (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email_address VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE product_category (
  id INT PRIMARY KEY,
  parent_category_id INT references product_category(id),
  category_name VARCHAR(100)
);

CREATE TABLE product_brand (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE product (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(300),
  brand_id INT references product_brand(id),
  category_id INT references product_category(id)
);

CREATE TABLE product_item (
  id INT PRIMARY KEY,
  product_id INT references product(id),
  sku VARCHAR(100),
  qty_in_stock INT,
  product_image VARCHAR(100),
  price DECIMAL
);

CREATE TABLE product_variation (
  id INT PRIMARY KEY,
  category_id INT references product_category(id),
  name VARCHAR(100)
);

CREATE TABLE product_variation_option (
  id INT PRIMARY KEY,
  variation_id INT references product_variation(id),
  value VARCHAR(100)
);

CREATE TABLE product_configuration (
  product_item_id INT references product_item(id),
  variation_option_id INT references product_variation_option(id)
);

CREATE TABLE backpack (
  id INT PRIMARY KEY,
  user_id INT references site_user(id)
);

CREATE TABLE backpack_item (
  id INT PRIMARY KEY,
  backpack_id INT references backpack(id),
  product_item_id INT references product_item(id),
  quantity INT
)
