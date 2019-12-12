import React from 'react';
import { Container, Segment, Header, Divider } from 'semantic-ui-react';
import InputListComponent from './inputList.component';

const CheckinComponent = () => (
    <Container style={{  paddingTop: "50px", paddingRight: "20px" }}>
        <Header as='h1' textAlign='left'>Check in</Header>
        <Divider />
        <Header as='h3' textAlign='left'>Tomorrow's Plan:</Header>
        <Segment style={{ minHeight: '100px', margin: "10px" }}>
            <InputListComponent data={['One', 'Two']}/>
        </Segment>
        <Header as='h3' textAlign='left'>What was accomplished:</Header>
        <Segment style={{ minHeight: '100px', margin: "10px" }}>
            <InputListComponent data={['No Work Done', 'Mucho work']} />
        </Segment>
  </Container>
)

export default CheckinComponent