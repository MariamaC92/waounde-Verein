CREATE TABLE maps (
id BIGSERIAL PRIMARY KEY,
longitude DOUBLE PRECISION NOT NULL,
latitude DOUBLE PRECISION NOT NULL,
zoom DOUBLE PRECISION NOT NULL,
overlay_file VARCHAR(200) NOT NULL
);

INSERT INTO maps (id, longitude, latitude, zoom, overlay_file) 
VALUES (1, -12.8677143, 15.2641251, 14, 'maskmarker.svg') 
