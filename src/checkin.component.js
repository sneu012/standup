import React from 'react'
import { Container, Segment } from 'semantic-ui-react'

const CheckinComponent = () => (
    <Container style={{  paddingTop: "50px", paddingRight: "20px" }}>
            <Segment fluid style={{ minHeight: '100px', margin: "10px" }}>Left</Segment>
            <Segment fluid style={{ minHeight: '100px', margin: "10px" }}>Middle</Segment>
  </Container>
)

export default CheckinComponent