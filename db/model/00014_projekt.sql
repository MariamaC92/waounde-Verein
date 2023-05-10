INSERT INTO links (url, description, classnames_id) VALUES ('/projekte/projekt1', 'Tätigkeitsbericht für das Jahr 2022', 1);

INSERT INTO links (url, description, classnames_id) VALUES ('/projekte/projekt2', 'Tätigkeitsbericht für das Jahr 2021', 1);

INSERT INTO headlines (description, deepness, classnames_id) VALUES ('2022 - Tätigkeitsbericht der Selbsthilfegruppe der Bürger Waoundes in Europa e.V.', 2, 6);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('Wir hoffen, das Jahr hat gut für Euch angefangen und es geht gut für Euch weiter. Noch in der letzten
Woche des alten Jahres konnten wir Waounde eine Hilfestellung geben. Es war eine schöne Art, das
alte Jahr abzuschließen. Vielen Dank. Doch erstmal der Reihe nach .. ', 1, 5);

INSERT INTO images (uri,alternative) VALUES ('bericht2022_4.png', 'Metallwerkstatt mit zerstörtem Dach');

INSERT INTO headlines (description, deepness, classnames_id) VALUES ('2021 - Tätigkeitsbericht der Selbsthilfegruppe der Bürger Waoundes in Europa e.V.', 2, 6);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('Wir hoffen, Ihr seid gut ins Jahr 2022 gekommen.', 1, 5);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('Im Jahr 2021 hatte die Selbsthilfegruppe Grund zur Freude aber auch zu tiefer Trauer. Am
15. Juli 2021 verstarb unser Gründungsmitglied und geistiger Vater Bilaly Cisse unerwartet in
Dakar. Bis zuletzt engagierte er sich für seine Mitmenschen und seine Heimatstadt...', 1, 5);

INSERT INTO images (uri,alternative) VALUES ('bericht2021_6.png', 'Lachende Kinder');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('projekte', 1, 11, 'headlines');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('projekte', 2, 21, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('projekte', 3, 12, 'images');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('projekte', 4, 1, 'links');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('projekte', 5, 12, 'headlines');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('projekte', 6, 22, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('projekte', 7, 23, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('projekte',8 , 13, 'images');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('projekte', 9, 2, 'links');