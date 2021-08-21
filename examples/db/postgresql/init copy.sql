CREATE TABLE IF NOT EXISTS app_user(id SERIAL PRIMARY KEY, name VARCHAR(20) NOT NULL);

INSERT INTO app_user(name) VALUES('Mike'), ('Dike'), ('Fike');