import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, CardContent, Button } from '@mui/material'

export const Nav = () => {
    return (
        <React.Fragment>
            <Card>
                <CardContent sx={{ bgcolor: "lightblue" }}>

                    <Grid container spacing={3} align="center">

                        <Grid item xs={2}>
                            <Link to="/home">
                                <Button variant='contained' fullWidth>Home</Button>
                            </Link>
                        </Grid>

                        <Grid item xs={2}>
                            <Link to="/dashboard">
                                <Button variant='contained' fullWidth>Dashboard</Button>
                            </Link>
                        </Grid>

                        <Grid item xs={2}>
                            <Link to="/expenses">
                                <Button variant='contained' fullWidth>Expenses</Button>
                            </Link>
                        </Grid>

                        <Grid item xs={2}>
                            <Link to="/earning">
                                <Button variant='contained' fullWidth>Earning</Button>
                            </Link>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>



        </React.Fragment>
    )
}
