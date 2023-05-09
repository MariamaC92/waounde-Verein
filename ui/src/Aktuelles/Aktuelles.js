import gesundheitszentrum1 from "./images/gesundheitszentrum1.png"
import gesundheitszentrum2 from "./images/gesundheitszentrum2.png"
import kulturtag1 from "./images/kulturtag1.png"
import kulturtag2 from "./images/kulturtag2.png"
import "./CSS/Aktuelles.css"



export default function Aktuelles() {
    return (
        <>
        <div className="Zeile">
            <div className="spalte1">
        <h3>Das Gesundheitszentrum in Waounde</h3>
        <p>Wir haben viel vor!</p>
        </div>
        <div className="spalte2">
        <p>In diesem Jahr, gingen die Bauarbeiten am Mutter-Kind-Zentrum, das 2021 begonnen
wurde und das dem Gesundheitszentrum angeschlossen sein wird, zügig weiter. Zur Jahreswende
konnte die Kachelung abgeschlossen und der Innenanstrich begonnen werden. Als Nächstes werden
die Ausstattung des Zentrums, die Rekrutierung und Einweisung des Personals folgen. Die Eröffnung
ist für Ende 2023 vorgesehen. Reiselustige sind eingeladen, der Eröffnung beizuwohnen! </p>
        <img src={gesundheitszentrum1} alt="Baustelle der Entbindungsstation" />
        <img src={gesundheitszentrum2} alt="Baustelle der Entbindungsstation" />
        </div>
        </div>

        <div className="Zeile">
            <div className="spalte1">
        <h3>Das öffentliche Kulturfest in München</h3>
        <p>Ein Einblick in die Kultur Waoundés in Europa</p>
        </div>
        <div className="spalte2">
        <p>Am 8. Oktober lud die Selbsthilfegruppe zu einem öffentlichen Kulturfest ein. Es fand, wie schon im
Jahr 2019, in München-Josephsburg statt, in einem historischen Bauernhaus, das in ein Jugendzentrum umgebaut wurde. Wir waren sehr glücklich, dieses Jahr einen Musiker aus Waounde dabei
zu haben. Sein Spiel auf der Djembe lud Jung und Alt zum Tanzen ein. Niemand konnte sich der
Anziehungskraft der Rhythmen entziehen. Aufgekratzt und fröhlich tanzten die Gäste vom frühen
Nachmittag bis späten Abend.Danke an die Selbsthilfeförderung der Stadt München, die den Kulturtag
gefördert hat und Danke allen, die gekommen sind oder kommen wollten. Es bedeutet uns viel.</p>
        <img src={kulturtag1} alt="Soninké Frauen in traditioneller Kleidung" /> 
        <img src={kulturtag2} alt="Soninké Frauen in traditioneller Kleidung" /> 
        </div>    
        </div>
        </>
        );
};