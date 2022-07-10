import React from "react";
import "./direction.css";

export default function Direction() {
  return (
    <div className="mapconatiner">
      <div className="maparea">
        <h1 className="maptitle">Direction</h1>
      </div>
      <div className="mapholder">
        <iframe
          title="karnavativadapav"
          class="map"
          width="100%"
          frameborder="0"
          scrolling="yes"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Karnavati vadapav katargam&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
}

// import React from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import "./direction.css";
// import "./loder.css";

// export default function Direction() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyABRLtDBG6mcHMGZlukYdfaKgn7m0Fa4Dc",
//   });

//   if (!isLoaded)
//     return (
//       <div className="lodercontainer">
//         <div className="push-pop">
//           <h1>load</h1>
//         </div>
//       </div>
//     );

//   return <Map />;
// }

// function Map() {
//   return (
//     <div className="mapholds">
//       <div className="directionarea">
//         <h1 className="directiontitle">Direction</h1>
//       </div>
//       <GoogleMap
//         zoom={15}
//         center={{
//           lat: 21.22496167128486,
//           lng: 72.83322651533082,
//         }}
//         mapContainerClassName="mapContainer"
//       >
//         <Marker
//           label={"karnavativadapav"}
//           title={"karnavativadapav"}
//           position={{ lat: 21.22496167128486, lng: 72.83322651533082 }}
//         />
//       </GoogleMap>
//     </div>
//   );
// }
