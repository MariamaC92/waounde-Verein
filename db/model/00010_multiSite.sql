ALTER TABLE content
ADD COLUMN side VARCHAR(30);

UPDATE content 
SET side = 'ueberuns';

ALTER TABLE content
ALTER COLUMN side
SET NOT NULL;

CREATE OR REPLACE view content_page AS 
SELECT content.side, content.content_table, headlines.description AS headline_description, headlines.deepness, images.uri, images.description AS image_description, images.alternative, images.alignment,
maps.longitude, maps.latitude, maps.zoom, maps.overlay_file, textcontent.topic
FROM headlines, images, maps, content, textcontent
WHERE (content.content_table = 'headlines' AND content.content_type_id = headlines.id);

INSERT INTO headlines (description,deepness)
VALUES ('Projektlistenüberschrift', 2);

INSERT INTO content (sort, content_type_id,content_table,side)
VALUES (1, 4, 'headlines', 'projekte');