CREATE TABLE images (
id BIGSERIAL PRIMARY KEY, 
uri VARCHAR(200) NOT NULL,
description VARCHAR(100),
alternative VARCHAR(255)NOT NULL,
classname VARCHAR(32),
alignment VARCHAR(32)
);