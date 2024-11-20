import styled from 'styled-components';

const LocationWrapper = styled.div`
  padding: 29px 0;
  .location_meta {
    margin-bottom: 29px;
  }
  a {
    &:hover {
      color: #31b8bd;
    }
  }

  p {
    @media only screen and (min-width: 200px) {
      padding-bottom: 20px;
    }
  }
`;

export default LocationWrapper;
