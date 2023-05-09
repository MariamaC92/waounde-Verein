CREATE TABLE content(
id BIGSERIAL PRIMARY KEY,
side VARCHAR(30) not null, 
sort SMALLINT NOT NULL,
content_type_id BIGINT NOT NULL,
content_table VARCHAR(64)
);

