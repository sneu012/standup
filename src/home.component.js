import React from 'react'
import { Container, Card, Image } from 'semantic-ui-react'

const HomeComponent = ({ users }) => (
    <Container style={{  paddingTop: "50px", paddingRight: "20px" }}>
      {
        users.map((user, key) =>
          <Card fluid raised key={key}>
            <Image src='' wrapped ui={false} />
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                {user.updateText}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {user.flags}
            </Card.Content>
          </Card>
        )
      }
      
    </Container>
)

export default HomeComponent