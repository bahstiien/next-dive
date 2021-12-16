import Head from "next/head";
import styles from "../styles/Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ h, w, markers, mark, markStyle }) {
  //Markers est un tableau de marker, voir le fichier data_example.txt pour voir le modèle de données
  return (
    <div>
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
      <div style={{ height: `${h}`, width: `${w}` }}>
        <MapContainer
          className={styles.map}
          center={[48.123, -2.884]}
          zoom={7}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker) => {
            return (
              <Marker key={marker.id} position={marker.position}>
                <Popup>{marker.popup.content}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
// import Head from "next/head";
// import styles from "../styles/Map.module.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-defaulticon-compatibility";

// function Map() {
//   // mapboxgl.accessToken =
//   //   "pk.eyJ1IjoiYmFzdGllbmxlY2FsdmV6IiwiYSI6ImNreDhtaGR4cTBkNnkyd3Q4MWFkZGg5cXgifQ.VblrJcEmRZp7C5hQgrbNHQ";
//   // const map = new mapboxgl.Map({
//   //   container: "map", // container ID
//   //   style: "mapbox://styles/mapbox/streets-v11", // style URL
//   //   center: [48.526711, -2.717423], // starting position [lng, lat]
//   //   zoom: 9, // starting zoom
//   // });
//   //Markers est un tableau de marker, voir le fichier data_example.txt pour voir le modèle de données
//   return (
//     <div className="flex mx-10">
//       <Head>
//         <link
//           rel="stylesheet"
//           href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
//           integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
//           // eslint-disable-next-line react/no-unknown-property
//           crossorigin=""
//         />

//         <link
//           href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
//           rel="stylesheet"
//         />

//         <script
//           src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
//           integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
//           // eslint-disable-next-line react/no-unknown-property
//           crossorigin=""
//         ></script>
//       </Head>
//       <div style={{ height: `600px`, width: `600px` }}>
//         <MapContainer
//           className={styles.map}
//           center={[48.123, -2.884]}
//           zoom={10}
//           scrollWheelZoom={false}
//           style={{ height: "100%", width: "100%" }}
//         >
//           <MapContainer></MapContainer>
//           <TileLayer
//             url={`https:api.mapbox.com/styles/bastienlecalvez/ckx8n2thj0mqx14obs6d484yd/tiles/256/1/48/2@2x?access_token=pk.eyJ1IjoiYmFzdGllbmxlY2FsdmV6IiwiYSI6ImNreDhtaGR4cTBkNnkyd3Q4MWFkZGg5cXgifQ.VblrJcEmRZp7C5hQgrbNHQ`}
//             attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
//           />
//           {/* <Marker
//             position={[48.526711, -2.717423]}
//             draggable={true}
//             animate={true}
//           ></Marker> */}
//         </MapContainer>
//       </div>
//     </div>
//   );
// }

// //api.mapbox.com/styles/bastienlecalvez/ckx8n2thj0mqx14obs6d484yd/tiles/256/1/48/2@2x?access_token=pk.eyJ1IjoiYmFzdGllbmxlY2FsdmV6IiwiYSI6ImNreDhtaGR4cTBkNnkyd3Q4MWFkZGg5cXgifQ.VblrJcEmRZp7C5hQgrbNHQ

// //styles/bastienlecalvez/ckx8n2thj0mqx14obs6d484yd

// // mapbox://styles/bastienlecalvez/ckx8n2thj0mqx14obs6d484yd

// export default Map;
