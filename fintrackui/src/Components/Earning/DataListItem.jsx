import React from 'react'
import axios from 'axios'
import { Grid, Button } from '@mui/material'

export const DataListItem = ({ item, doRefresh }) => { //we send doRefresh as props from child

    const handleDelete = async (_id) => { //this will delete by id
        const payload = { _id };
        await axios.post("http://localhost:3030/deleteearnings", payload)
        doRefresh(); // we call doRefresh as a function
    }

    return (
        <React.Fragment>
            <Grid item xs={3} sx={{ borderTop: "2px solid grey", borderBottom: "2px solid grey" }} align="center"> {item.item}</Grid>

            <Grid item xs={3} sx={{ borderTop: "2px solid grey", borderBottom: "2px solid grey" }} align="center"> {item.cat} </Grid>

            <Grid item xs={2} sx={{ borderTop: "2px solid grey", borderBottom: "2px solid grey" }} align="center">{item.amt} </Grid>

            <Grid item xs={2} sx={{ borderTop: "2px solid grey", borderBottom: "2px solid grey" }} align="center"> <Button variant='contained' color='success' fullWidth> Edit </Button> </Grid>

            <Grid item xs={2} sx={{ borderTop: "2px solid grey", borderBottom: "2px solid grey" }} align="center"> <Button onClick={() => handleDelete(item._id)} variant='contained' color='error' fullWidth> Delete </Button> </Grid>

        </React.Fragment>
    )
}
