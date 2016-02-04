import React from 'react';
import  {GoogleMapLoader, GoogleMap} from 'react-google-maps';

export default () => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{lat: 40.748817, lng: -73.985428}}
          />
         }
    />
  );
};
