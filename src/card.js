import React from 'react'
import { Container, Card, Button, Image } from 'semantic-ui-react'

const CardExampleFluid = () => (
    <Container style={{  paddingTop: "50px", paddingRight: "30px" }}>
        <Card fluid raised>
    <Image src='' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      Hello
    </Card.Content>
  </Card>
    </Container>
)

export default CardExampleFluid