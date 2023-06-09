// import gesundheitszentrum1 from "./images/gesundheitszentrum1.png"
// import gesundheitszentrum2 from "./images/gesundheitszentrum2.png"
import gesundheitszentrum5 from "./images/gesundheitszentrum5.png";
import kulturtag from "./images/kulturtag.png";
import "./CSS/Aktuelles.css";
import kalender from "./images/kalender.svg";

export default function Aktuelles() {
  return (
    <div className="container">
      <img className="kalender" src={kalender} alt="Kalender" />

      <div className="Zeile">
        <div className="spalte1">
          <h3>Das Gesundheitszentrum in Waounde</h3>
          <p className="teaser">Wir haben viel vor!</p>
        </div>
        <div className="spalte2">
          <p className="absatzAktuelles">
            In diesem Jahr, gingen die Bauarbeiten am Mutter-Kind-Zentrum, das
            2021 begonnen wurde und das dem Gesundheitszentrum angeschlossen
            sein wird, zügig weiter. Zur Jahreswende konnte die Kachelung
            abgeschlossen und der Innenanstrich begonnen werden. Als Nächstes
            werden die Ausstattung des Zentrums, die Rekrutierung und Einweisung
            des Personals folgen. Die Eröffnung ist für Ende 2023 vorgesehen.
            Reiselustige sind eingeladen, der Eröffnung beizuwohnen!{" "}
          </p>
          <img
            className="imgAktuelles"
            src={gesundheitszentrum5}
            alt="Baustelle der Entbindungsstation"
          />
        </div>
      </div>

      <div className="Zeile">
        <div className="spalte1">
          <h3>Das öffentliche Kulturfest in München</h3>
          <p className="teaser">Ein Einblick in die Kultur der Soninkés</p>
        </div>
        <div className="spalte2">
          <p className="absatzAktuelles">
            Am 8. Oktober lud die Selbsthilfegruppe zu einem öffentlichen
            Kulturfest ein. Es fand, wie schon im Jahr 2019, in
            München-Josephsburg statt, in einem historischen Bauernhaus, das in
            ein Jugendzentrum umgebaut wurde. Wir waren sehr glücklich, dieses
            Jahr einen Musiker aus Waounde dabei zu haben. Sein Spiel auf der
            Djembe lud Jung und Alt zum Tanzen ein. Niemand konnte sich der
            Anziehungskraft der Rhythmen entziehen. Aufgekratzt und fröhlich
            tanzten die Gäste vom frühen Nachmittag bis späten Abend.Danke an
            die Selbsthilfeförderung der Stadt München, die den Kulturtag
            gefördert hat und Danke allen, die gekommen sind oder kommen
            wollten. Es bedeutet uns viel.
          </p>
          <img
            className="imgAktuelles"
            src={kulturtag}
            alt="Soninké Frauen in traditioneller Kleidung"
          />
        </div>
      </div>
    </div>
  );
}
