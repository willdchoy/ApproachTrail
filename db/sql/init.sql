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
  brand_name VARCHAR(300),
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
  product_id INT references product(product_id),
  attribute jsonb
);

CREATE TABLE IF NOT EXISTS product_price_history (
  product_price_history_id INT PRIMARY KEY,
  original_price DECIMAL NOT NULL,
  sale_price DECIMAL,
  created_at TIMESTAMP NOT NULL,
  product_item_id INT NOT NULL references product_item(product_item_id)
);

CREATE TABLE IF NOT EXISTS product_media (
  product_media_id INT PRIMARY KEY,
  filename VARCHAR(100),
  type VARCHAR(10),
  product_item_id INT references product_item(product_item_id),
  product_id INT references product(product_id)
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
-- !! Must use ; as the delimeter when importing json
COPY product_item(product_item_id,sku,qty_in_stock,product_id,attribute)
FROM '/var/data/postgres/seed/seed-product-item.csv'
DELIMITER ';'
CSV HEADER;

-- product price history
COPY product_price_history(product_price_history_id,original_price,sale_price,created_at,product_item_id)
FROM '/var/data/postgres/seed/seed-product-price-history.csv'
DELIMITER ','
CSV HEADER;

-- product price media
COPY product_media(product_media_id,filename,type,product_item_id,product_id)
FROM '/var/data/postgres/seed/seed-product-media.csv'
DELIMITER ','
CSV HEADER;