import React, { useContext, Fragment } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosAdd,
} from 'react-icons/io';
import { Menu, Popover } from 'antd';
import Container from 'components/UI/Container/Container';
import Image from 'components/UI/Image/Image';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import { ProfilePicLoader } from 'components/UI/ContentLoader/ContentLoader';
import Loader from 'components/Loader/Loader';
import AuthProvider, { AuthContext } from 'context/AuthProvider';
import useDataApi from 'library/hooks/useDataApi';
import {
  ADD_HOTEL_PAGE,
  AGENT_PROFILE_PAGE,
  AGENT_PROFILE_FAVORITE,
  AGENT_PROFILE_CONTACT,
} from 'settings/constant';
import AgentDetailsPage, {
  BannerSection,
  UserInfoArea,
  ProfileImage,
  ProfileInformationArea,
  ProfileInformation,
  SocialAccount,
  NavigationArea,
} from './AgentDetails.style';

const ProfileNavigation = (props) => {
  const { path, className } = props;
  const { loggedIn } = useContext(AuthContext);

  const navigations = [
    { label: <NavLink to={path}>Listing</NavLink>, key: 'listing' },
    {
      label: <NavLink to={AGENT_PROFILE_FAVORITE}>Favorite</NavLink>,
      key: 'favorite',
    },
    {
      label: <NavLink to={AGENT_PROFILE_CONTACT}>Contact</NavLink>,
      key: 'contact',
    },
  ];

  return (
    <NavigationArea>
      <Container fluid={true}>
        <Menu className={className} items={navigations} />
        {loggedIn && (
          <Link className="add_card" to={ADD_HOTEL_PAGE}>
            <IoIosAdd /> Add Hotel
          </Link>
        )}
      </Container>
    </NavigationArea>
  );
};

const AgentProfileInfo = () => {
  const { data, loading } = useDataApi('/data/agent.json');
  if (isEmpty(data) || loading) return <Loader />;
  const {
    first_name,
    last_name,
    content,
    profile_pic,
    cover_pic,
    social_profile,
  } = data[0];
  const username = `${first_name} ${last_name}`;

  return (
    <Fragment>
      <BannerSection>
        <Image className="absolute" src={cover_pic.url} alt="Profile cover" />
      </BannerSection>
      <UserInfoArea>
        <Container fluid={true}>
          <ProfileImage>
            {profile_pic ? (
              <Image src={profile_pic.url} alt="Profile" />
            ) : (
              <ProfilePicLoader />
            )}
          </ProfileImage>
          <ProfileInformationArea>
            <ProfileInformation>
              <Heading content={username} />
              <Text content={content} />
            </ProfileInformation>
            <SocialAccount>
              <Popover content="Twitter">
                <a
                  href={social_profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTwitter className="twitter" />
                </a>
              </Popover>
              <Popover content="Facebook">
                <a
                  href={social_profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook className="facebook" />
                </a>
              </Popover>
              <Popover content="Instagram">
                <a
                  href={social_profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram className="instagram" />
                </a>
              </Popover>
            </SocialAccount>
          </ProfileInformationArea>
        </Container>
      </UserInfoArea>
    </Fragment>
  );
};

export default function AgentDetailsViewPage(props) {
  return (
    <AgentDetailsPage>
      <AuthProvider>
        <AgentProfileInfo />
        <ProfileNavigation path={AGENT_PROFILE_PAGE} {...props} />
        <Container fluid={true}>
          <Outlet />
        </Container>
      </AuthProvider>
    </AgentDetailsPage>
  );
}
