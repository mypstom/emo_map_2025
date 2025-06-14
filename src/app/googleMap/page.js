"use client"

import Image from "next/image";
import GoogleMapReact from "google-map-react";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Home() {

  const defaultProps = {
    center: {
      lat: 25.043965383061277,
      lng: 121.52815409843964
    },
    zoom: 17
  };

  return (
    <>
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={25.043965383061277}
          lng={121.52815409843964}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </>
  );
}
