CREATE TABLE headlines (
 id BIGSERIAL PRIMARY KEY,
 description VARCHAR(200) NOT NULL,
 deepness SMALLINT NOT NULL,
 classnames_id BIGINT 
 FOREIGN KEY (classnames_id)
 REFERENCES classnames (id)
 );