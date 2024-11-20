import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base, themed } from '../Base';

const ImageWrapper = styled('img')(
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  base,
  themed('Image'),
);

const Image = ({ src, alt, m = 0, ...props }) => (
  <ImageWrapper src={src} m={m} alt={alt} {...props} />
);

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
