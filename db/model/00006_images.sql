CREATE TABLE images (
id BIGSERIAL PRIMARY KEY, 
uri VARCHAR(200) NOT NULL,
description VARCHAR(100),
alternative VARCHAR(255)NOT NULL,
alignment VARCHAR(32),
classnames_id BIGINT 
FOREIGN KEY (classnames_id)
REFERENCES classnames (id)
);