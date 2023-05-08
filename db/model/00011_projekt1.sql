
INSERT INTO classnames (id, description, content_type_table) VALUES (6,'report_header', 'headlines');

INSERT INTO classnames (id, description, content_type_table) VALUES ( 7, 'report_text', 'textcontent');

INSERT INTO classnames (id, description, content_type_table) VALUES ( 8, 'report_ul', 'textcontent');

INSERT INTO classnames (id, description, content_type_table) VALUES ( 9, 'report_ol', 'textcontent');

 INSERT INTO headlines (description, deepness, classnames_id) VALUES ('Tätigkeitsbericht der Selbsthilfegruppe der Bürger Waoundes in Europa e.V. für 2022', 2, 6);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ( 'Wir hoffen, das Jahr hat gut für Euch angefangen und es geht gut für Euch weiter. Noch in der letzten
Woche des alten Jahres konnten wir Waounde eine Hilfestellung geben. Es war eine schöne Art, das
alte Jahr abzuschließen. Vielen Dank. Doch erstmal der Reihe nach ..', 1, 7);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('Im Jahr 2022 hatten wir drei große Schwerpunkte:', 1, 7);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('das Berufsbildungszentrum (einschließlich Baubeginn einer Siebdruckwerkstatt)
das Gesundheitszentrum (einschließlich Bau von Mutter-Kind-Zentrum/Entbindungsstation)
ein öffentliches Kulturfest in München mit 250+ Gästen ', 1, 9);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('Durch Eure Unterstützung konnten wir im Jahr 2022:', 1, 7);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('mit knapp 3.000 € zwanzig Schüler und zwei Lehrer am Berufsbildungszentrum unterstützen
mit knapp 4.000 € Medikamente und Laborreagenzien für das Gesundheitszentrum anschaffen
mit rund 18.000 € den Bau einer Siebdruckwerkstatt am Berufsbildungszentrum beginnen', 1, 8);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('Außerdem gingen die Bauarbeiten am Mutter-Kind-Zentrum weiter. Alle Bürger Waoundes in
Deutschland und Frankreich sammelten 43.000 € als Eigenbeitrag. Vom Bundesministerium für
wirtschaftliche Zusammenarbeit (BMZ) kamen knapp 130.000 € (25%:75% Ko-Finanzierung).', 1, 7);

INSERT INTO images (uri,description, alternative ) VALUES ('bericht2022_1.png', 'Bild von der Baustelle im Oktober 2022', 'Baustelle mit Baum');

INSERT INTO images (uri,description, alternative ) VALUES ('bericht2021_2.png', 'Bild von der Baustelle Jan 2023 (Innenanstrich)', 'Männer vor gestrichener Wand');

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('Die Administration unserer Projekte, in Deutschland und in Senegal, erfolgt ehrenamtlich. Als wir im
November 2022 auf einem Abrechnungsseminar des BMZ mit ca. 30 anderen Vereinen zusammen
kamen, die mit dem BMZ zusammenarbeiten, waren wir und ein weiterer Verein aus München die
einzigen, die ehrenamtlich arbeiten. Die übrigen Vereine wie Caritas International, Naturfreunde,
Christoffel Blindenmission, u.v.m. machen ihre Arbeit mit festangestellten Mitarbeitern ..', 1, 7);

INSERT INTO headlines (description, deepness, classnames_id) VALUES ('1. Das Berufsbildungszentrum im Jahr 2022', 3, 6);

INSERT INTO textcontent (topic, texttypes_id, classnames_id) VALUES ('Wie schon im Jahr 2021 unterstützte die Selbsthilfegruppe im Jahr 2022 rund zwanzig mittellose
Berufsschüler, die die Einschreibgebühr für das Berufsbildungszentrum nicht bezahlen können. Die
Gebühr beträgt zwischen 20 € und 40 € pro Jahr je nach Fach. (Elektriker zahlen mehr als Friseure, da
die Unterrichtsmittel für Elektriker teurer sind.) Im Schuljahr 20/21 gaben wir für Sozialfälle rund 470
€ aus, im Schuljahr 21/22 rund 570 €. Der Sozialfonds entstand im Jahr 2020 durch eine Privatspende
von 700 €. Im Jahr 2021 ergänzten wir ihn um 1.300 €. Anfang 2022 standen noch rund 900 € zur
Verfügung, d.h. knapp 600.000 CFA.', 1, 7);

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 1, 5, 'headlines');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 2, 8, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 3, 9, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 4, 10, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 5, 11, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 6, 12, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 7, 13, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 8, 6, 'images');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 9, 7, 'images');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 10, 14, 'textcontent');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 11, 6, 'headlines');

INSERT INTO content (side, sort, content_type_id, content_table) VALUES ('/projekt1', 12, 15, 'textcontent');

UPDATE content SET side = 'projekt1'
WHERE side = '/projekt1';



