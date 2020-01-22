import React, { Component } from 'react'
import {Card, Grid } from 'semantic-ui-react'
export default class GroupsComponent extends Component {
    render() {
        return (
            <>

<Grid>
    <Grid.Row>
      <Grid.Column>
      <Card fluid style={{margin: '10px', marginTop: '10px', marginBottom: '0px' }}>
    <Card.Content>
      <Card.Header style={{fontSize: '36px'}}>EHR Team</Card.Header>
    </Card.Content>
    <Card.Content style={{height: '20vh'}}>
        <Grid>
                <Grid.Column width={10}>
                    <Card fluid >
                        <Card.Content>
                        <Card.Header>
                            Recent
                        </Card.Header>
                        </Card.Content >
                        <Card.Content style={{ height: '125px', boxShadow: 'inset 0 0 5px #000000', overflowX: 'scroll', overflowY: 'hidden', padding: '0px' }}>
                        <Card  style={{display: 'inline-block'}}>
                        <Card.Content >
                            <div style={{ fontWeight: 'bold'}}>Justin</div> <br></br>I accidentally broke the entire dev server as well as several parts of...
                        </Card.Content>
                    </Card>
                    <Card  style={{display: 'inline-block'}}>
                        <Card.Content >
                            <div style={{ fontWeight: 'bold'}}>Justin</div> <br></br>I accidentally broke the entire dev server as well as several parts of...
                        </Card.Content>
                    </Card>
                    <Card  style={{display: 'inline-block'}}>
                        <Card.Content >
                            <div style={{ fontWeight: 'bold'}}>Justin</div> <br></br>I accidentally broke the entire dev server as well as several parts of...
                        </Card.Content>
                    </Card>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Card fluid>
                        <Card.Content>
                        <Card.Header>
                            Something Else?
                        </Card.Header>
                        </Card.Content>
                        <Card.Content style={{ height: '125px'}}>
                            idk
                        </Card.Content>
                    </Card>
                </Grid.Column>
        </Grid>
    </Card.Content>
  </Card>
      </Grid.Column>
      </Grid.Row>
      
  </Grid>


  </>
        )
    }
}
