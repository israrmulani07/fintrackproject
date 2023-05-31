import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Account = () => {
    const [curr, setCurr] = useState({})
    const [eleg, setEleg] = useState(0)
    const [app, setApp] = useState(0)
    const [outs, setOuts] = useState(0)
    const [paid, setPaid] = useState(0)

    const navigate = useNavigate();

    const handleApprove = async () => {
        const payload = {
            ...curr,
            elegmount: eleg,
            appamount: app,
            outstanding: outs,
            paid
        };
        await localStorage.setItem("expClaim", JSON.stringify(payload));
        alert("Claim has been successfully procceded to Finance Department")
        navigate("/dashboard");
        setCurr({})
        setEleg(0);
        setApp(0)
        setOuts(0)
        setPaid(0)
    }

    const handleReject = () => {
        localStorage.removeItem("expClaim")
        setCurr({})                                                  //to hide component after reject button
    }

    useEffect(() => {
        const currData = localStorage.getItem("expClaim")
        currData &&
            setCurr(JSON.parse(currData))
    }, [])

    useEffect(() => {
        setPaid(app - outs)
    }, [app, outs])

    return (
        <React.Fragment>
            {curr.empid &&
                <Grid container spacing={3}>
                    <Grid item xs={3}>{curr.empid}</Grid>
                    <Grid item xs={3}>{curr.amount}</Grid>
                    <Grid item xs={3}><TextField value={eleg} onChange={(e) => setEleg(e.target.value)} variant="outlined" label="Eligible Amount" /></Grid>
                    <Grid item xs={3}><TextField value={app} onChange={(e) => setApp(e.target.value)} variant="outlined" label="Approved Amount" /></Grid>
                    <Grid item xs={3}><TextField value={outs} onChange={(e) => setOuts(e.target.value)} variant="outlined" label="Outstanding Amount" /></Grid>
                    <Grid item xs={3}>Amount to be Paid:{paid}</Grid>
                    <Grid item xs={3}><Button onClick={handleApprove} variant="contained" color="success">Approve</Button></Grid>
                    <Grid item xs={3}><Button onClick={handleReject} variant="contained" color="error">Reject</Button></Grid>

                </Grid>
            }
        </React.Fragment>
    )
}