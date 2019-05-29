import React from 'react'
import { Segment, Grid, Card } from 'semantic-ui-react'

export default class Profile extends React.Component {


    render() {
        return(
            <div> 
                <Segment>
                    <Grid columns={2}>
                        <Grid.Column width={4}>
                        <h1>Under Construction</h1>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <h1>I too am under construction.</h1>
                        </Grid.Column>
                    </Grid>
                    
                </Segment>
            </div>
        )
    }



}