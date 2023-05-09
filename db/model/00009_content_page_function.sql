CREATE OR REPLACE FUNCTION content_page(_sidename TEXT) 
	RETURNS TABLE (side TEXT, sort BIGINT, content_table TEXT, tag_attributes TEXT) 
	LANGUAGE sql AS 
$func$ 
  
SELECT side, 
		 sort, 
		 content_table,  
		 CASE 
		 
			/* Überschriften */ 
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
	
		 END tag_attributes  	
  FROM content 
WHERE content.side = _sidename 
ORDER BY sort;

$func$;  
	


