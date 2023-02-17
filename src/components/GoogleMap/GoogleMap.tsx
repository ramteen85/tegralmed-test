import { useGlobal } from '../../hooks/useGlobal';
import React from 'react';

const GoogleMap = ({ title }) => {
  const { googleMapStyles } = useGlobal();
  const StyledGoogleMap = googleMapStyles;

  return (
    <StyledGoogleMap>
      <iframe
        title={title}
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7048163.103902511!2d149.83421250150607!3d-30.39395336245409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1676602221072!5m2!1sen!2sau"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </StyledGoogleMap>
  );
};

export default GoogleMap;
