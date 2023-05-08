CREATE TABLE texttypes(
id BIGSERIAL PRIMARY KEY,
description VARCHAR (30),
element VARCHAR (10)
);

INSERT INTO texttypes (description, element) VALUES ('Absatz', 'p');
INSERT INTO texttypes (description, element) VALUES ('Zitat', 'cite');

