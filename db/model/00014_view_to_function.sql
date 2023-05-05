DELIMITER //
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
														  'deepness', headlines.deepness 
														)::TEXT  
			 			  FROM headlines 
	  					 WHERE headlines.id = content.content_type_id) 

			/* Links */ 
		 	when content_table = 'links' 
			 	THEN (SELECT json_build_object(
				 										  'description', links.description, 
														  'url', links.url 
														)::TEXT  
			 			  FROM links 
						 WHERE links.id = content.content_type_id) 
		 END tag_attributes  	
  FROM content 
WHERE content.side = _sidename 
ORDER BY sort;
$func$; 
