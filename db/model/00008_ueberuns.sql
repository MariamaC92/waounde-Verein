INSERT INTO headlines (description, deepness) 
VALUES ('Waoundé und seine Menschen', 1);
INSERT INTO headlines (description, deepness) 
VALUES ('Nachts ist kälter als draußen', 2);
INSERT INTO headlines (description, deepness) 
VALUES ('Was, du willst noch n Headliner haben', 3);

INSERT INTO textcontent (topic, texttypes_id  ) VALUES ('Waoundé ist eine Gemeinde von rund 15.00 Einwohnern in Nord-Ost Senegal.Die meisten Bewohner Waoundés gehören zum Volk der Soninké. Ihre Lebens- grundlage war über Generationen die Landwirtschaft, bis die Dürre der letzten Jahrzehnte es unmöglich machte, von der Landwirtschaft zu leben. Die jungen Männer gehen seither auf Arbeitssuche in die Hauptstadt oder, wenn sie die französische Staatsbürgerschaft haben, nach Europa. Eine Gruppe von Bürgern Waoundés lebt und arbeitet in München.', 1);

INSERT INTO texttypes (description, element) VALUES ('Absatz', '<p>');
INSERT INTO texttypes (description, element) VALUES ('Zitat', '<cite>');

INSERT INTO images (uri,description,alternative)
VALUES('Baum-Mock.jpg','Der älteste Baum im Harz. Mit lustig dickem Stamm.','Baum mit Krone aber ohne Äste unten');

INSERT INTO maps (longitude,latitude,zoom,overlay_file)
VALUES(-12.865865,15.269977,15,'Location_Pin.jpg');

INSERT INTO classnames(description, content_type_table) 
VALUES ('contentImageBorder','images');

INSERT INTO content (sort,content_type_id,content_table) 
VALUES (1, 3, 'headlines');

INSERT INTO content (sort,content_type_id,content_table) 
VALUES (2, 2, 'textcontent');

INSERT INTO content (sort,content_type_id,content_table) 
VALUES (3,1 , 'maps');

INSERT INTO content (sort,content_type_id,content_table) 
VALUES (4,1 , 'images');

create view content_page AS 
SELECT content.content_table, headlines.description AS headline_description, headlines.deepness, images.uri, images.description AS image_description, images.alternative, images.alignment,
maps.longitude, maps.latitude, maps.zoom, maps.overlay_file, textcontent.topic
FROM headlines, images, maps, content, textcontent
WHERE (content.content_table = 'headlines' AND content.content_type_id = headlines.id)