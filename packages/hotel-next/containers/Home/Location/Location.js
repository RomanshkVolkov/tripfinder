import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Container from 'components/UI/Container/Container';
import Heading from 'components/UI/Heading/Heading';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Loader from 'components/Loader/Loader';
import ImageCard from 'components/ImageCard/ImageCard';
import { LISTING_POSTS_PAGE } from '../../../settings/constant';
import LocationWrapper, { CarouselSection } from './Location.style';

const LocationGrid = ({ data, deviceType }) => {
  return (
    <LocationWrapper>
      <Container fluid={true}>
        <SectionTitle
          title={<Heading content="Explore Destinations" />}
          link={<Link href={`${LISTING_POSTS_PAGE}`}>Show all</Link>}
        />

        <CarouselSection>
          {data.length !== 0 ? (
            <Carousel
              ssr
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass="carouselItem"
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 5,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 768,
                  },
                  items: 3,
                },
                miniTab: {
                  breakpoint: {
                    max: 767,
                    min: 465,
                  },
                  items: 2,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                },
              }}
              deviceType={deviceType}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
            >
              {data.map((post, index) => (
                <ImageCard
                  key={index}
                  imageSrc={post.locationImage.url}
                  title={post.city}
                  meta={`${post.numberOfPost} Hotels`}
                  link={LISTING_POSTS_PAGE}
                />
              ))}
            </Carousel>
          ) : (
            <Loader />
          )}
        </CarouselSection>
      </Container>
    </LocationWrapper>
  );
};

export default LocationGrid;
