CREATE TABLE textcontent (
id BIGSERIAL PRIMARY KEY,
topic TEXT NOT NULL, 
texttypes_id BIGINT,
classnames_id BIGINT not null default 2, 
FOREIGN KEY (classnames_id)
REFERENCES classnames (id) 
);