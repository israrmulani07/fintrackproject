import React from 'react'
import { Grid, Card, CardContent } from '@mui/material'
import { LeftNav } from './Home/LeftNav'
import { Homecontent } from './Home/Homecontent'


export const Home = () => {
    return (
        <React.Fragment>
            <br />
            <Grid container spacing={2} align="center" sx={{ bgcolor: "lightgoldenrodyellow" }}>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <LeftNav />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={9}> <Homecontent /> </Grid>


            </Grid>

        </React.Fragment >
    )
}
