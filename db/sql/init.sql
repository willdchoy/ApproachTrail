CREATE TABLE IF NOT EXISTS site_user (
  site_user_id INT PRIMARY KEY,
  email_address VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS product_size_category (
  product_size_category_id INT PRIMARY KEY,
  category_name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS product_size_option (
  product_size_option_id INT PRIMARY KEY,
  size_option_name VARCHAR(100),
  sort_option_order INT,
  product_size_category_id INT references product_size_category(product_size_category_id)
);

CREATE TABLE IF NOT EXISTS product_category (
  product_category_id INT PRIMARY KEY,
  parent_category_id INT references product_category(product_category_id),
  category_name VARCHAR(100),
  product_size_category_id INT references product_size_category(product_size_category_id)
);

CREATE TABLE IF NOT EXISTS product_brand (
  product_brand_id INT PRIMARY KEY,
  brand_description VARCHAR(300),
  brand_name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS product (
  product_id INT PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(300),
  brand_id INT references product_brand(product_brand_id),
  category_id INT references product_category(product_category_id)
);

CREATE TABLE IF NOT EXISTS product_item (
  product_item_id INT PRIMARY KEY,
  sku VARCHAR(100),
  qty_in_stock INT,
  original_price INT,
  sale_price INT,
  product_id INT references product(product_id)
);

CREATE TABLE IF NOT EXISTS product_media (
  product_media_id INT PRIMARY KEY,
  filename VARCHAR(100),
  product_item_id INT references product_item(product_item_id)
);

CREATE TABLE IF NOT EXISTS product_variation (
  product_variation_id INT PRIMARY KEY,
  qyt_in_stock int,
  product_item_id INT references product_item(product_item_id),
  size_id INT references product_size_option(product_size_option_id)
);

CREATE TABLE IF NOT EXISTS product_price_history (
  product_price_history_id INT PRIMARY KEY,
  original_price INT,
  sala_price INT,
  created_at DATE,
  product_item_id INT references product_item(product_item_id)
);

CREATE TABLE IF NOT EXISTS backpack (
  backpack_id INT PRIMARY KEY,
  site_user_id INT references site_user(site_user_id)
);

CREATE TABLE IF NOT EXISTS backpack_item (
  backpack_item_id INT PRIMARY KEY,
  backpack_id INT references backpack(backpack_id),
  product_item_id INT references product_item(product_item_id),
  quantity INT
);
