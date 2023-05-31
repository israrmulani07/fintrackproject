import React, { useState } from "react"
import { Grid, TextField, Button } from "@mui/material"

export const Claim = () => {

    const [empid, setEmpid] = useState(0)
    const [amount, setAmount] = useState(0)

    const handleSubmit = () => {                    //function for submit button
        const payload = {                           //we take payload 
            empid,
            amount
        };
        localStorage.setItem("expClaim", JSON.stringify(payload)) //we take localstorage in that we take payload 
        // alert("Your Claim has been Successfully Proceded to Account Department")
    };
    return (
        <React.Fragment>
            <Grid container spacing={3}>

                <Grid item xs={4}>
                    <TextField variant="outlined" label="Employee Id"
                        onChange={(e) => setEmpid(e.target.value)} fullWidth />
                </Grid>

                <Grid item xs={4}>
                    <TextField variant="outlined" label="Amount"
                        onChange={(e) => setAmount(e.target.value)} fullWidth />
                </Grid>

                <Grid item xs={4}>
                    <Button onClick={handleSubmit} variant="contained" color="success" sx={{ height: 55 }} fullWidth>Submit</Button>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}