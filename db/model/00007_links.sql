CREATE TABLE links (
id BIGSERIAL PRIMARY KEY,
url VARCHAR(200) NOT NULL,
description VARCHAR (40) NOT NULL,
classnames_id BIGINT not null default 1, 
FOREIGN KEY (classnames_id) REFERENCES classnames(id));
