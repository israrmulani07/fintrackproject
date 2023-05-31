import React from 'react'
import { Card, CardContent } from '@mui/material'
import { AddEarning } from './Earning/AddEarning'
import { DataList } from './Earning/DataList'


export const Earning = () => {

    return (
        <React.Fragment>
            <br />
            <Card sx={{ bgcolor: "lightsalmon", height: 300 }}>
                <CardContent>
                    <AddEarning />
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <DataList />
                </CardContent>
            </Card>

        </React.Fragment>
    )
}
