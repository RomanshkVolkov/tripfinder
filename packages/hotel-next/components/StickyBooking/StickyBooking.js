import React, { Fragment } from 'react';
import StickyBookingWrapper, {
  HotelInfo,
  InfoArea,
  Title,
  Logo,
  HotelAction,
  Price,
  ActionBtn,
  HotelRating,
  HideOnMobile,
  ShowOnlyMobile,
} from './StickyBooking.style';

const StickyBooking = ({ logo, title, price, rating, action, className }) => {
  // Add all classs to an array
  const addAllClasses = ['sticky_booking'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <StickyBookingWrapper className={addAllClasses.join(' ')}>
      <HotelInfo className="hotel_info">
        <HideOnMobile>
          <Fragment>{logo && <Logo src={logo} alt={title} />}</Fragment>
        </HideOnMobile>

        {title || rating || price ? (
          <InfoArea>
            <HideOnMobile>
              <Fragment>{title && <Title>{title}</Title>}</Fragment>
            </HideOnMobile>
            <ShowOnlyMobile>
              <Price>
                <span>${price}</span> / Night
              </Price>
            </ShowOnlyMobile>
            {rating && <HotelRating>{rating}</HotelRating>}
          </InfoArea>
        ) : (
          ''
        )}
      </HotelInfo>

      <HotelAction className="hotel_action">
        <HideOnMobile>
          <Price>
            <span>${price}</span> / Night
          </Price>
        </HideOnMobile>
        <ActionBtn>{action}</ActionBtn>
      </HotelAction>
    </StickyBookingWrapper>
  );
};

export default StickyBooking;
