CREATE TABLE links (
id BIGSERIAL PRIMARY KEY,
url VARCHAR(200) NOT NULL,
description VARCHAR (40) NOT NULL,
classnames_id BIGINT, 
FOREIGN KEY (classnames_id) REFERENCES classnames(id));

INSERT INTO links (url,description)
VALUES ('/eventarchiv', 'Eventarchiv');

INSERT INTO content(sort, content_type_id, content_table,side)
VALUES(2, 1, 'links','aktuelles');

DROP VIEW content_page;





                 