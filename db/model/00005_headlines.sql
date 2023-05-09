CREATE TABLE headlines (
 id BIGSERIAL PRIMARY KEY,
 description VARCHAR(200) NOT NULL,
 deepness SMALLINT NOT NULL,
 classnames_id BIGINT not null default 4, 
 FOREIGN KEY (classnames_id)
 REFERENCES classnames (id)
 );