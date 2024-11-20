'use client';

import { GoogleMap, useLoadScript } from '@react-google-maps/api';

interface MapTypes {
  mapContainerClassName?: string;
}

const options = {
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
};

export default function MapView({ mapContainerClassName }: MapTypes) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`,
  });

  if (!isLoaded) {
    return <span>Loading...</span>;
  }

  return (
    <GoogleMap
      mapContainerClassName={mapContainerClassName}
      center={{
        lat: 21.4272,
        lng: 92.0058,
      }}
      zoom={12}
      options={options}
    ></GoogleMap>
  );
}
