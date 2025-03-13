CREATE TABLE IF NOT EXISTS site_user (
  site_user_id INT PRIMARY KEY,
  email_address VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS product_category (
  product_category_id INT PRIMARY KEY,
  parent_category_id INT references product_category(product_category_id),
  category_name VARCHAR(100),
  category_code VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS product_brand (
  product_brand_id INT PRIMARY KEY,
  brand_name VARCHAR(100),
  brand_code VARCHAR(100)
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
  product_id INT references product(product_id)
);

CREATE TABLE IF NOT EXISTS product_price (
  product_price_history_id INT PRIMARY KEY,
  original_price INT,
  sale_price INT,
  created_at DATE,
  product_item_id INT references product_item(product_item_id)
);

CREATE TABLE IF NOT EXISTS product_media (
  product_media_id INT PRIMARY KEY,
  location VARCHAR(250),
  filename VARCHAR(100),
  product_item_id INT references product_item(product_item_id)
);

CREATE TABLE IF NOT EXISTS product_attribute (
  product_attribute_id INT PRIMARY KEY,
  attribute_code VARCHAR(100),
  display_name VARCHAR(100),
  data_type VARCHAR(20),
  product_item_id INT references product_item(product_item_id)
);

CREATE TABLE IF NOT EXISTS product_attribute_value_varchar (
  product_item_id INT references product_item(product_item_id),
  product_attribute_id INT references product_attribute(product_attribute_id),
  value varchar(200)
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

-- Seed DB

-- brands
COPY product_brand(product_brand_id,brand_code,brand_name)
FROM '/var/data/postgres/seed/seed-brand.csv'
DELIMITER ','
CSV HEADER;

-- category
COPY product_category(product_category_id,parent_category_id,category_name,category_code)
FROM '/var/data/postgres/seed/seed-category.csv'
DELIMITER ','
CSV HEADER;

-- product
COPY product(product_id,name,brand_id,category_id)
FROM '/var/data/postgres/seed/seed-product.csv'
DELIMITER ','
CSV HEADER;

-- product item
COPY product_item(product_item_id,sku,qty_in_stock,product_id)
FROM '/var/data/postgres/seed/seed-product-item.csv'
DELIMITER ','
CSV HEADER;

-- product attribute
COPY product_attribute(product_attribute_id,attribute_code,display_name,data_type,product_item_id)
FROM '/var/data/postgres/seed/seed-product-attribute.csv'
DELIMITER ','
CSV HEADER;

-- product attribute value varchar
COPY product_attribute_value_varchar(product_item_id,product_attribute_id,value)
FROM '/var/data/postgres/seed/seed-product-attribute-value-varchar.csv'
DELIMITER ','
CSV HEADER;
