import React from 'react'
import { Grid, Button } from '@mui/material'

export const DataListItem = ({ item }) => { //added props item in {}
    return (
        <React.Fragment>

            <Grid item xs={3} sx={{ border: "2px solid grey" }} align="center">{item.item} </Grid>

            <Grid item xs={3} sx={{ border: "2px solid grey" }} align="center">{item.cat} </Grid>

            <Grid item xs={2} sx={{ border: "2px solid grey" }} align="center">{item.amt} </Grid>

            <Grid item xs={2} sx={{ border: "2px solid grey" }} align="center"> <Button variant='contained' color='success' >Edit</Button> </Grid>

            <Grid item xs={2} sx={{ border: "2px solid grey" }} align="center"> <Button variant='contained' color='error' >Delete</Button> </Grid>

        </React.Fragment>
    )
}


