CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    price INT NOT NULL,
    img TEXT NOT NULL
);