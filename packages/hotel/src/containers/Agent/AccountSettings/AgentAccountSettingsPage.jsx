import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Row, Col, Menu, Avatar } from 'antd';
import Container from 'components/UI/Container/Container.style';
import {
  AGENT_PROFILE_PAGE,
  AGENT_IMAGE_EDIT_PAGE,
  AGENT_PASSWORD_CHANGE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
} from 'settings/constant';
import AccountSettingWrapper, {
  AccountSidebar,
  AgentAvatar,
  SidebarMenuWrapper,
  ContentWrapper,
  AgentName,
  FromWrapper,
} from './AccountSettings.style';

const navigations = [
  {
    label: <NavLink to={AGENT_ACCOUNT_SETTINGS_PAGE}>Edit Profile</NavLink>,
    key: 'edit_profile',
  },
  {
    label: <NavLink to={AGENT_IMAGE_EDIT_PAGE}>Change Photos</NavLink>,
    key: 'change_photos',
  },
  {
    label: <NavLink to={AGENT_PASSWORD_CHANGE_PAGE}>Change Password</NavLink>,
    key: 'change_password',
  },
];

function AccountSettingNavLink() {
  return (
    <SidebarMenuWrapper>
      <Menu
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['edit_profile']}
        mode="inline"
        items={navigations}
      />
    </SidebarMenuWrapper>
  );
}

export default function AgentAccountSettingsPage() {
  return (
    <AccountSettingWrapper>
      <Container fullWidth={true}>
        <Row gutter={30}>
          <Col xs={24} sm={12} md={9} lg={6}>
            <AccountSidebar>
              <AgentAvatar>
                <Avatar
                  src="http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png"
                  alt="avatar"
                />
                <ContentWrapper>
                  <AgentName>Aziz Acharki Ahmedh</AgentName>
                  <Link to={AGENT_PROFILE_PAGE}>View profile</Link>
                </ContentWrapper>
              </AgentAvatar>
              <AccountSettingNavLink />
            </AccountSidebar>
          </Col>
          <Col xs={24} sm={12} md={15} lg={18}>
            <FromWrapper>
              <Outlet />
            </FromWrapper>
          </Col>
        </Row>
      </Container>
    </AccountSettingWrapper>
  );
}
