CREATE TABLE TextContent (
Id BIGSERIAL PRIMARY KEY,
Topic TEXT NOT NULL, 
ClassName VARCHAR(32),
TextType VARCHAR(10) NOT NULL 
);