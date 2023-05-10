CREATE table rowset (
id BIGSERIAL PRIMARY KEY, 
classnames_id BIGINT NOT NULL DEFAULT 10,
closing BOOLEAN NOT NULL DEFAULT FALSE); 

CREATE table colset (
id BIGSERIAL PRIMARY KEY, 
classnames_id BIGINT NOT NULL DEFAULT 11,
closing BOOLEAN NOT NULL DEFAULT FALSE); 

INSERT INTO rowset (closing) VALUES (FALSE); 
INSERT INTO colset (closing) VALUES (FALSE); 
INSERT INTO rowset (closing, classnames_id) VALUES (TRUE, 12); 
INSERT INTO colset (closing, classnames_id) VALUES (TRUE, 13); 
INSERT INTO colset (closing, classnames_id) VALUES (FALSE, 15); 


UPDATE content SET sort = sort +1 WHERE side = 'ueberuns'; 

INSERT INTO content (side, sort, content_type_id, content_table) 
  VALUES ('ueberuns', 1, 1, 'rowset'); 

UPDATE content SET sort = sort +1 WHERE side = 'ueberuns' AND sort >= 2;

INSERT INTO content (side, sort, content_type_id, content_table) 
  VALUES ('ueberuns', 2, 1, 'colset'); 

UPDATE content SET sort = sort +1 WHERE side = 'ueberuns' AND sort > 4;
 
INSERT INTO content (side, sort, content_type_id, content_table) 
  VALUES ('ueberuns', 5, 2, 'colset'); 

UPDATE content SET sort = sort +1 WHERE side = 'ueberuns' AND sort > 5;

INSERT INTO content (side, sort, content_type_id, content_table) 
  VALUES ('ueberuns', 6, 1, 'colset'); 

UPDATE content SET sort = sort +1 WHERE side = 'ueberuns' AND sort > 9;

INSERT INTO content (side, sort, content_type_id, content_table) 
  VALUES ('ueberuns', 10, 2, 'colset'); 

UPDATE content SET sort = sort +1 WHERE side = 'ueberuns' AND sort > 10;

INSERT INTO content (side, sort, content_type_id, content_table) 
  VALUES ('ueberuns', 11, 2, 'rowset'); 

CREATE OR REPLACE FUNCTION content_page(_sidename TEXT) 
	RETURNS TABLE (side TEXT, sort BIGINT, content_table TEXT, tag_attributes TEXT) 
	LANGUAGE sql AS 
$func$ 
  
SELECT side, 
		 sort, 
		 content_table,  
		 CASE 
		 
			/* �berschriften */ 
		 	when content_table = 'headlines' 
				THEN (SELECT json_build_object(
														  'description',headlines.description,
														  'deepness', headlines.deepness,
														  'classname', classnames.description 
														)::TEXT  
			 			  FROM headlines, classnames
	  					 WHERE headlines.id = content.content_type_id AND (classnames.id = headlines.classnames_id)) 

			/* Links */ 
		 	when content_table = 'links' 
			 	THEN (SELECT json_build_object(
				 										  'description', links.description, 
														  'url', links.url, 
														  'classname', classnames.description
														)::TEXT  
			 			  FROM links, classnames 
						 WHERE links.id = content.content_type_id AND classnames.id = links.classnames_id)
						 
			/*Images */
			when content_table = 'images' 
				THEN (SELECT json_build_object(
														  'uri',images.uri,
														  'description', images.description,
														  'alternative', images.alternative,
														  'classname', classnames.description 
														)::TEXT  
			 			  FROM images, classnames 
	  					 WHERE images.id = content.content_type_id AND classnames.id = images.classnames_id)
	  					 
			/*Textcontent */
			when content_table = 'textcontent' 
				THEN (SELECT json_build_object(
														  'topic',textcontent.topic,
														  'texttypes_id', textcontent.texttypes_id,
														  'element', texttypes.element,
														  'classname', classnames.description
														)::TEXT  
			 			  FROM textcontent, texttypes, classnames 
	  					 WHERE textcontent.id = content.content_type_id AND texttypes.id = textcontent.texttypes_id AND classnames.id = textcontent.classnames_id)
							
			/*Maps */
			when content_table = 'maps' 
				THEN (SELECT json_build_object(
														  'longitude',maps.longitude,
														  'latitude', maps.latitude,
														  'zoom', maps.zoom,
														  'overlay_file', maps.overlay_file
														)::TEXT  
			 			  FROM maps 
	  					 WHERE maps.id = content.content_type_id) 
							
			/* Zeilen */ 
		 	when content_table = 'rowset' 
				THEN (SELECT json_build_object(
														  'closing', rowset.closing,
														  'classname', classnames.description 
														)::TEXT  
			 			  FROM rowset, classnames
	  					 WHERE rowset.id = content.content_type_id AND (classnames.id = rowset.classnames_id)) 

			/* Spalten */ 
		 	when content_table = 'colset' 
				THEN (SELECT json_build_object(
														  'closing', colset.closing,
														  'classname', classnames.description 
														)::TEXT  
			 			  FROM colset, classnames
	  					 WHERE colset.id = content.content_type_id AND (classnames.id = colset.classnames_id)) 
	
		 END tag_attributes  	
  FROM content 
WHERE content.side = _sidename 
ORDER BY sort;

$func$;  
  