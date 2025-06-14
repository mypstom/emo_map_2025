"use client"

import Map, { Marker, useMap} from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';


export default function MapboxUI() {

  const {myMap} = useMap();


  const shopList =  [
    {
      longitude: 121.52507223459494,
      latitude: 25.04562577822283,
      name: "木白甜點咖啡店"
    }, 
    {
      longitude: 121.52543855812335,
      latitude: 25.044643191989,
      name: "星巴克"
    }, 
    {
      longitude: 121.5241280211413,
      latitude: 25.04428842263054,
      name: "出頭天咖啡廳"
    }, 

  ];

  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoiamllbmh1YWdvbyIsImEiOiJjbTdsNjY0MjMwNDl2MmtzZHloYXY0czNkIn0.mlD3UGH3wR3ZMJmCuHDpSQ"
        initialViewState={{
          longitude: 121.52817156559162,
          latitude: 25.043949558152605,
          zoom: 17
        }}
        id="myMap"
        //加入 marker
        style={{width: "100vw", height: "100vh"}}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      >
        {
          shopList.map((shop) => (
            <Marker
              longitude={shop.longitude}
              latitude={shop.latitude}
              key={shop.name}
              onClick={() => {
                // myMap.flyTo({center: [shop.longitude, shop.latitude]});
                alert(shop.name);
              }}
            >
              <div className='w-10 h-10 bg-red-500 rounded-full'></div>
            </Marker>
          ))
        }

      </Map>
    </>
  );

}
