import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const LocationWrapper = styled.div`
  padding: 52px 0;
  @media (max-width: 480px) {
    padding: 30px 0;
  }
`;

export const CarouselSection = styled.div`
  .react-multi-carousel-list {
    .react-multi-carousel-item {
      transition: transform 0.3s ease;

      @media (min-width: 465px) {
        padding: 0 10px;
      }

      .image_card {
        > a {
          @media (max-width: 1600px) {
            height: 310px;
          }
          @media (max-width: 991px) {
            height: 280px;
          }
        }
      }
    }

    .react-multiple-carousel__arrow {
      opacity: 0;
      visibility: hidden;
      min-width: 36px;
      min-height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background-color: ${themeGet('color.1', '#ffffff')};
      box-shadow: 0 3px 6px ${themeGet('boxShadow.1', 'rgba(0, 0, 0, 0.16)')};
      transition: background-color 0.2s ease;
      @media (min-width: 768px) {
        min-width: 38px;
        min-height: 38px;
      }

      &::before {
        color: ${themeGet('primary.0', '#008489')};
      }

      &:hover {
        background-color: ${themeGet('primary.0', '#008489')};
        &::before {
          color: ${themeGet('color.1', '#ffffff')};
        }
      }
    }

    &:hover {
      .react-multiple-carousel__arrow {
        opacity: 1;
        visibility: visible;
      }
    }

    .react-multiple-carousel__arrow--left {
      left: 20px;
      @media (min-width: 768px) {
        left: 30px;
      }
    }

    .react-multiple-carousel__arrow--right {
      right: 20px;
      @media (min-width: 768px) {
        right: 30px;
      }
    }
  }
`;

export default LocationWrapper;
