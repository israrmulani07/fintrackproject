import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material'
import { DataListItem } from './DataListItem'

export const DataList = () => {

    const [data, setData] = useState([])   //useState for data to store

    const [refresh, setRefresh] = useState(false) //here we keep useState to false



    const getData = async () => {        //this is promise call so we need async await. from this we will get data
        const result = await axios.get("http://localhost:3030/earnings")
        setData(result.data)             //storing results data in setData
    };

    const doRefresh = () => {           //created function for refresh  
        setRefresh(true)
    }

    useEffect(() => {                   //for data / axios this is phase of didmount this will bring data and set data 
        getData();
    }, [data])                          //we called data here for updating our data from getData.


    useEffect(() => {                   // this is for refresh page after delete the data 
        if (refresh) {
            getData()
            setRefresh(false)
        }
    }, [refresh])                       // this phase is of updating 

    return (
        <React.Fragment>
            <Grid container spacing={3}>

                {  // we are doing maping on data //doRefresh sent as props from child to parent
                    data.map((item) =>
                        < DataListItem item={item} doRefresh={doRefresh} />
                    )
                }
            </Grid>
        </React.Fragment>
    )
}


/*steps:- for data 

 -we need useState 
 -axios also need
 */