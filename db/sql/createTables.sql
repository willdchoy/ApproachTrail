CREATE TABLE site_user (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email_address VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE product_category (
  id INT PRIMARY KEY,
  category_id INT references product_category(id)
);

CREATE TABLE product (
  id INT PRIMARY KEY,
  category_id INT references product_category(id)
);

CREATE TABLE product_item (
  id INT PRIMARY KEY,
  product_id INT references product(id),
  sku VARCHAR(100),
  qty_in_stock INT,
  product_image VARCHAR(300),
  price DECIMAL
);

CREATE TABLE variation (
  id INT PRIMARY KEY,
  category_id INT references product_category(id)
);

CREATE TABLE variation_option (
  id INT PRIMARY KEY,
  variation_id INT references variation(id),
  value VARCHAR(100)
);

CREATE TABLE product_configuration (
  product_item_id INT references product_item(id),
  variation_option_id INT references variation_option(id),
  value VARCHAR(100)
);

CREATE TABLE backpack (
  id INT PRIMARY KEY,
  user_id INT references site_user(id)
);

CREATE TABLE backpack_item (
  id INT PRIMARY KEY,
  backpack_id INT references backpack(id),
  product_item_id INT references product_item(id)
)