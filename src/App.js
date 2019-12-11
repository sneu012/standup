import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import CardExampleFluid from './card';
import LoginForm from './login';

import {
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Grid
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
  state = {
    animation: 'push',
    direction: 'left',
    dimmed: false,
    visible: true,
  }

  render() {
    const { animation, dimmed, direction, visible } = this.state

    return (
      <Router>
        <Container fluid className="page-container">
        <Header as='h1' textAlign='center' color='orange'>Welcome to RxNT Range</Header>
          <Sidebar.Pushable as={Segment}  style={{ width: '100%'}}>
            {
              <VerticalSidebar
                animation={animation}
                direction={direction}
                visible={visible}
              />
            }
            
            <Route exact path="/">
              <Sidebar.Pusher dimmed={dimmed && visible} style={{ width: '90%'}}>
              <Grid celled='internally'>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              </Sidebar.Pusher>
            </Route>

            <Route path="/check-in">
              <Sidebar.Pusher dimmed={dimmed && visible}>
                <CardExampleFluid />
              </Sidebar.Pusher>
            </Route>

            <Route path="/login">
              <Sidebar.Pusher dimmed={dimmed && visible}>
                <LoginForm />
              </Sidebar.Pusher>
            </Route>

          </Sidebar.Pushable>
        </Container>
      </Router>
    )
  }
}


