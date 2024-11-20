'use client';

import { StandaloneSearchBox, useLoadScript } from '@react-google-maps/api';

type QueryStringType = {
  children: React.ReactNode;
  loader?: React.ReactNode;
  onLoad: (ref: any) => void;
  onPlacesChanged: () => void;
};

type l = 'places'[];
const libraries: l = ['places'];

export default function SearchAutocomplete({
  children,
  loader,
  onLoad,
  onPlacesChanged,
}: QueryStringType) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`,
    libraries,
  });

  return (
    <div className="map_autocomplete">
      {!isLoaded && loader}
      {isLoaded && (
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          {children}
        </StandaloneSearchBox>
      )}
    </div>
  );
}
