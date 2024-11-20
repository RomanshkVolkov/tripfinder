import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const MapWrapper = ({ children, ...rest }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY,
    libraries: ['places', 'drawing', 'geometry'],
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  return <>{isLoaded && <GoogleMap {...rest}>{children}</GoogleMap>}</>;
};

export default MapWrapper;
