INSERT INTO headlines (description, deepness ) VALUES ('Über uns', 2);

INSERT INTO headlines (description, deepness) VALUES ('Senegal', 3);

INSERT INTO headlines (description, deepness) VALUES ('Waoundanko', 3);

INSERT INTO headlines (description, deepness) VALUES ('Unser Verein', 3);


INSERT INTO images (uri, description, alternative) VALUES ('senegal1.jpeg', '', 'Senegalesische Boote am Strand');

INSERT INTO images (uri, description, alternative) VALUES ('senegal2.jpeg', '', 'Senegalesische Puppen');

INSERT INTO images (uri, description, alternative) VALUES ('waoundanko1.jpg', '', 'Frauen Waoundés');

INSERT INTO images (uri, description, alternative) VALUES ('verein1.png', '', 'Mitglieder des Vereins der SBW');

INSERT INTO images (uri, description, alternative) VALUES ('verein2.png', '', 'Weiter Mitglieder des Vereins der SBW');


INSERT INTO textcontent (topic, texttypes_id) VALUES ('Senegal ist mit rund 15 Millionen Einwohnern auf einer Fläche von knapp der Hälfte der
Bundesrepulik und mehr als zwanzig verschiedenen Ethnien ein echter „Viel-Völker-Staat“. Unter
Anderem erkennt man es daran, dass es sieben offizielle Sprachen gibt: Französisch, Wolof, Diolla,
Serrer, Pulaar, Mandinke und Soninke. So verschieden die Sprachen sind, so unterschiedlich sind
Kultur und Tradition der verschiedenen Ethnien in diesem von der Kolonisation geschaffenen Staat,
der 1960 seine „Unabhängikeit“ von Frankreich erlangte. Doch so verschieden die Sprachen und
Kulturen sind, so friedlich leben die Menschen miteinander und sprechen – oder lernen - die sie
umgebenden Sprachen im Handumdrehen. Denn auch in Senegal gibt es Migration, z.T. vom Land in
die Städte, z.T. in Regionen, wo Arbeit angeboten wird (zB. Tourismus).', 1);


INSERT INTO textcontent (topic, texttypes_id) VALUES ('Im Flusstal des Senegal leben vor allem das Hirtenvolk der Peul und das Bauernvolk der Soninke. In
der ca. 80 km von Waounde gelegenen Regionshaupstadt Matam ist die Bevölkerung zu 90% Peul
und zu 10% Soninke. In Waounde ist es umgekehrt: 90% der Bevölkerung sind Soninke, 10% sind
Peul. Die Peul sind Hirten und leben von der Viehzucht, die Soninke sind Bauern und Fischer und
leben von der Landwirtschaft und vom Fischfang. Beide Völker tauschten jahrhundertelang ihre
Produkte und lebten so in trauter Gemeinschaft.
Die anhaltende Trockenheit in den 1970-er Jahren, brachte beiden Völkern groβe Einbrüche, vor
allem aber die Landwirtschaft kam vollständig zum Erliegen. Aus Landwirtschaft konnte fortan kein
Einkommen mehr erzielt werden und die jungen Männer wanderten in die Städte, um für Geld zu
arbeiten und Lebensmittel für ihre Familien zu kaufen: Reis, Hirse, Mais, Öl - Produkte, die zuvor aus
der Landwirtschaft gewonnen werden konnten', 1);

INSERT INTO textcontent (topic, texttypes_id) VALUES ('Wir sind 73 Bürger der Gemeinde Waoundé in Senegal, die in München leben und arbeiten. Im Jahr 1994 
gründeten wir die "Selbsthilfegruppe der Bürger Waoundés in Europa eV". Sie ist ein eingetragener 
gemeinnütziger Verein. Wir möchten dazu beitragen, die Lebensbedingungen in unserer Heimatgemeinde 
zu verbessern. Zu guten Lebensbedingungen gehören sauberes Trinkwasser, Stromversorgung, Bildung, 
Hygiene. In früheren Jahren zum Beispiel tranken die Leute das Wasser aus dem Fluß, das führte zur 
Verbreitung der Cholera. Die Situation verbesserte sich, als die Leute begannen Brunnen zu bauen. 
Heute haben 80% der Häuser Anschluss an das öffentliche Wasserleitungsnetz. Die Folge ist das 
totale Verschwinden der Krankheit.', 1);

INSERT INTO textcontent (topic, texttypes_id) VALUES ('Unser Verein hat seine Kräfte bisher vor allem auf die Bildung konzentriert. 
Wir haben Projekte an der öffentlichen Grundschule durchgeführt und ein Berufsbildungszentrum gebaut. 
Zur Zeit bauen wir ein Gesundheitszentrum. Hier findet ihr ein Kurzportrait.', 1);

INSERT INTO classnames (id, description, content_type_table) VALUES (5,'teaser', 'textcontent');

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('La Teranga Sénégalaise', 1, 5);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('Die Bewohner Waoundés', 1, 5);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('Wer sind wir', 1, 5);



INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 1, 2, 'headlines');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 2, 5, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 3, 1, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 4, 1, 'images');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 5, 2, 'images');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 6, 3, 'headlines');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 7, 6, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 8, 2, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 9, 1, 'maps');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 10, 3, 'images');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 11, 4, 'headlines');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 12, 7, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 13, 3, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 14, 4, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 15, 4, 'images');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('ueberuns', 16, 5, 'images');












