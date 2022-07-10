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
