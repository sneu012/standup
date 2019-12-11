  
import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, Dropdown, Divider } from 'semantic-ui-react'
const options = [
    { key: undefined, value: undefined, text: 'Select' },
    { key: 'ehr', value: 'ehr', text: 'EHR' },
    { key: 'pm', value: 'pm', text: 'PM' },
    { key: 'admin', value: 'admin', text: 'Admin' },
]
const LoginForm = () => (
  <Grid fluid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 700 }}>
      <Header as='h1' color='blue' textAlign='center'>
        Log-in to your account
      </Header>
      <Form size='massive' >
        <Segment stacked size='huge'>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
            <Dropdown placeholder='Select Team' fluid selection options={options} />
            <Divider />
          <Button color='orange' fluid size='huge'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Please sign in and update your status
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm