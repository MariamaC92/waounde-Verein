CREATE TABLE Images (
Id BIGSERIAL PRIMARY KEY, 
URI VARCHAR(200) NOT NULL,
Description VARCHAR(100),
Alternative VARCHAR(255)NOT NULL,
ClassName VARCHAR(32),
Alignment VARCHAR(32)
);