import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import HomeComponent from './home.component';
import CheckinComponent from './checkin.component';
import LoginForm from './login.component';
import users from './dummyData';

import {
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react'

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Link to='/'><Menu.Item as='span'>
      <Icon name='home' />
      Home
    </Menu.Item>
    </Link>
    <Link to='/check-in'>
      <Menu.Item as='span'>
        <Icon name='edit' />
        Check-in
    </Menu.Item>
    </Link>
    <Link to='/camera'>
      <Menu.Item as='span'>
        <Icon name='camera' />
        Channels
    </Menu.Item>
    </Link>
    <Link to='/login'>
      <Menu.Item as='span'>
        <Icon name='user' />
        Login
    </Menu.Item>
    </Link>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default class SidebarExampleTransitions extends Component {

  render() {
    return (
      <Router>
        <Container fluid className="page-container">
        <Header as='h1' textAlign='center' color='orange'>Welcome to RxNT Range</Header>
          <Sidebar.Pushable as={Segment}  style={{ width: '100%'}}>
            {
              <VerticalSidebar
                animation='push'
                direction='left'
                visible={true}
              />
            }
            
            <Route exact path="/">
              <Sidebar.Pusher className="main-content">
                <HomeComponent users={users}/>
              </Sidebar.Pusher>
            </Route>

            <Route path="/check-in">
              <Sidebar.Pusher className="main-content">
                <CheckinComponent />
              </Sidebar.Pusher>
            </Route>

            <Route path="/login">
              <Sidebar.Pusher className="main-content">
                <LoginForm />
              </Sidebar.Pusher>
            </Route>

          </Sidebar.Pushable>
        </Container>
      </Router>
    )
  }
}


