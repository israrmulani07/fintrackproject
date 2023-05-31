import React from 'react'
import { Card, CardContent } from "@mui/material"
import { AddExpenses } from './Expenses/AddExpenses'
import { DataList } from './Expenses/DataList'

export const Expenses = () => {
    return (
        <React.Fragment>
            <br />
            <Card sx={{ bgcolor: "lightsalmon", height: 300 }}>
                <CardContent>
                    <AddExpenses />
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
