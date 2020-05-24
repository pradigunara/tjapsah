import React from 'react'
import { Grid } from 'semantic-ui-react'

export default function Board() {
    return (
        <div className="board">
            <Grid textAlign="center" className="board-grid" columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <div className="test2">Nothing Here</div>
                    </Grid.Column>
                    <Grid.Column stretched width={8}>
                        <div className="test2">Opponent's Hand</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="test2">Nothing Here</div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row stretched>
                    <Grid.Column>
                        <div className="test">Opponent's Hand</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="test">Field</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="test">Opponent's Hand</div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column stretched>
                        <div className="test3">Chatbox</div>
                    </Grid.Column>
                    <Grid.Column className="test3" stretched>
                        <Grid.Row>1row</Grid.Row>
                        <Grid.Row>2row</Grid.Row>
                        <Grid.Row>2row</Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="test3">Nothing Here</div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
