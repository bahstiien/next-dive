import Head from "next/head";
import styles from "../styles/Map.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  //Markers est un tableau de marker, voir le fichier data_example.txt pour voir le modèle de données
  return (
    <div className="flex mx-10">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          // eslint-disable-next-line react/no-unknown-property
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          // eslint-disable-next-line react/no-unknown-property
          crossorigin=""
        ></script>
      </Head>
      <div style={{ height: `600px`, width: `600px` }}>
        <MapContainer
          className={styles.map}
          center={[48.526711, -2.717423]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
