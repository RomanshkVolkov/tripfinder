'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQueryParam } from '@/hooks/use-query-param';
import SearchAutocomplete from '@/components/ui/search-autocomplete';
import { MapMarkerIcon } from '@/components/icons/map-marker';
import Input from '@/components/ui/form-fields/input';

export default function LocationInputFilter() {
  const { clearFilter, updateQueryparams } = useQueryParam();
  const searchParams = useSearchParams();
  const location = searchParams?.get('location');

  const [searchBox, setSearchBox] = useState<any>();
  const [locationInput, setLocationInput] = useState({
    searchedLocation: location,
    searchedPlaceAPIData: [],
  });

  const onLoad = (ref: any) => setSearchBox(ref);
  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : [],
    });
    updateQueryparams(
      'location',
      places && places[0] && places[0].formatted_address,
    );
  };

  // removes value when reset
  useEffect(() => {
    if (!location) {
      setLocationInput({
        ...locationInput,
        searchedLocation: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  function handleClearClick() {
    setLocationInput({
      ...locationInput,
      searchedLocation: '',
    });
    clearFilter(['location']);
  }

  return (
    <SearchAutocomplete
      onLoad={onLoad}
      onPlacesChanged={onPlacesChanged}
      loader={
        <Input
          type="text"
          label="Search Destination"
          inputClassName="!text-sm !pl-12"
          labelClassName="lg:!text-base !mb-2 text-gray-dark"
          startIcon={<MapMarkerIcon className="h-5 w-5" />}
          startIconClassName="!left-1"
          placeholder="Loading . . ."
          disabled
        />
      }
    >
      <Input
        type="text"
        label="Search Destination"
        inputClassName="!text-sm !pl-12"
        labelClassName="lg:!text-base !mb-2 text-gray-dark"
        startIcon={<MapMarkerIcon className="h-5 w-5" />}
        startIconClassName="!left-1"
        placeholder="Santa Maria Maggi..."
        required
        clearable={locationInput.searchedLocation ? true : false}
        endIcon={true}
        onClearClick={handleClearClick}
        value={locationInput.searchedLocation || ''}
        onChange={(event: any) => {
          setLocationInput({
            ...locationInput,
            searchedLocation: event.target.value,
          });
        }}
      />
    </SearchAutocomplete>
  );
}
