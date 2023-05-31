import React, { useEffect, useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Finance = () => {
    const [curr, setCurr] = useState({})
    const [paidamount, setPaidamount] = useState(0)
    const [balance, setBalance] = useState(0)

    const navigate = useNavigate()

    const handleApprove = () => {
        const payload = { ...curr, paidamount, balance }
        localStorage.removeItem("expClaim", JSON.stringify(payload))
        navigate("/home");
    }

    const handleReject = () => {
        localStorage.removeItem("explClaim")
        setCurr({})
        navigate("/home")
    }

    useEffect(() => {
        const currData = localStorage.getItem("expClaim")
        currData &&
            setCurr(JSON.parse(currData))
    }, [])

    useEffect(() => {
        setBalance(curr.paid - paidamount)
    }, [paidamount])

    return (
        <React.Fragment>
            {curr.paid &&
                <Grid container spacing={3}>
                    <Grid item xs={4}>{`"Employee Id":${curr.empid}`}</Grid>
                    <Grid item xs={4}>{`"Amount Claim":${curr.amount}`}</Grid>
                    <Grid item xs={4}>{`"Eligible Amount":${curr.elegamount}`}</Grid>
                    <Grid item xs={4}>{`"Approved Amount":${curr.appamount}`}</Grid>
                    <Grid item xs={4}>{`"Outstanding Amount":${curr.outstanding}`}</Grid>
                    <Grid item xs={4}>{`"Amount to be Paid":${curr.paid}`}</Grid>

                    <Grid item xs={3}><TextField onChange={(e) => setPaidamount(e.target.value)} /></Grid>
                    <Grid item xs={3}><Button onClick={handleApprove} variant="contained" color="success">Approve</Button></Grid>
                    <Grid item xs={3}><Button onClick={handleReject} variant="contained" color="error">Reject</Button></Grid>
                </Grid>
            }
        </React.Fragment>
    )
}


