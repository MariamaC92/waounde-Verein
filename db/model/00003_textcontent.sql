CREATE TABLE textcontent (
id BIGSERIAL PRIMARY KEY,
topic TEXT NOT NULL, 
texttypes_id BIGINT,
classnames_id BIGINT 
FOREIGN KEY (classnames_id)
REFERENCES classnames (id) 
);