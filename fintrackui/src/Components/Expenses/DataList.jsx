import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DataListItem } from './DataListItem'
import { Grid } from '@mui/material'

export const DataList = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const result = await axios.get("http://localhost:3030/expenses")
        setData(result.data)
    }

    useEffect(() => { //this is lifecylce hook in this component didmount
        getData()
    }, []);

    return (
        <React.Fragment>

            <Grid container spacing={3}>
                {
                    data.map((item) =>
                        <DataListItem item={item} /> //item={item} is props 
                    )
                }
            </Grid>
        </React.Fragment>
    )
}
