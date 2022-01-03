// import Head from "next/head";
// import styles from "../styles/Map.module.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// function Map({ h, w, markers, mark, markStyle }) {
//   //Markers est un tableau de marker, voir le fichier data_example.txt pour voir le modèle de données
//   return (
//     <div>
//       <Head>
//         <link
//           rel="stylesheet"
//           href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
//           integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
//           // eslint-disable-next-line react/no-unknown-property
//           crossorigin=""
//         />
//         <script
//           src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
//           integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
//           // eslint-disable-next-line react/no-unknown-property
//           crossorigin=""
//         ></script>
//       </Head>

//       <div style={{ height: `${h}`, width: `${w}` }}>
//         <fishIcon />
//         <MapContainer
//           className={styles.map}
//           center={[48.123, -2.884]}
//           zoom={7}
//           scrollWheelZoom={false}
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           {markers.map((marker) => {
//             return (
//               <Marker key={marker.id} position={marker.position}>
//                 <Popup>{marker.popup.content}</Popup>
//               </Marker>
//             );
//           })}
//         </MapContainer>
//       </div>
//     </div>
//   );
// }

// export default Map;
