CREATE TABLE classnames(
id BIGSERIAL PRIMARY KEY,
description VARCHAR (32) NOT NULL,
content_type_table VARCHAR (64) NOT NULL 
);

INSERT INTO classnames (id, description, content_type_table)
VALUES (1, 'default_link', 'links');

INSERT INTO classnames (id, description, content_type_table) 
VALUES (2, 'default_textcontent', 'textcontent');

INSERT INTO classnames (id, description, content_type_table) 
VALUES (3, 'default_images', 'images');

INSERT INTO classnames (id, description, content_type_table) 
VALUES (4, 'default_headlines', 'headlines');

