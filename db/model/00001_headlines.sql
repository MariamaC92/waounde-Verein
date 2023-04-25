CREATE TABLE headlines (
 id BIGSERIAL PRIMARY KEY,
 description VARCHAR(200) NOT NULL,
 deepness SMALLINT NOT NULL,
 classname VARCHAR(32) 
 );