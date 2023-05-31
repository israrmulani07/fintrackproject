import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from "react-select";
import { Grid, Button, TextField, Alert } from "@mui/material";

export const AddEarning = () => {
    const [item, setItem] = useState("");
    const [cat, setCat] = useState(0);
    const [amt, setAmt] = useState(0);
    const [msg, setMsg] = useState("");
    const [ishow, setIsShow] = useState(false);
    const [options, setOptions] = useState([
        { value: 1, label: "red" },
        { value: 2, label: "green" },
        { value: 3, label: "yellow" }
    ]);


    const handleAdd = async () => {
        const payload = {
            item,
            cat,
            amt
        };
        const result = await axios.post("http://localhost:3030/addearning", payload)
        setMsg(result.data)
    };

    const getData = async () => {
        const result = await axios.get("http://localhost:3030/catdd")
        setOptions(result.data)
    }

    const resetData = () => {
        setItem("")
        setAmt(0)
        setCat(0)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (msg !== "") {
            setIsShow(true);
            resetData();
            setTimeout(() => {
                setMsg("");

            }, 5000);
        } else {
            setIsShow(false);

        }
    }, [msg]);


    return (

        <React.Fragment>
            <Grid container spacing={3} align="center">

                <Grid item xs={3}><Select options={options} onChange={(opt) => setCat(opt.value)} /></Grid>

                <Grid item xs={3}><TextField value={item} onChange={(e) => setItem(e.target.value)} variant='outlined' label="Item" fullWidth /></Grid>

                <Grid item xs={3}><TextField value={amt} type="Number" onChange={(e) => setAmt(e.target.value)} variant='outlined' label="Amount" fullWidth /></Grid>

                <Grid item xs={3}><Button onClick={handleAdd} disabled={item.length < 3 && amt < 10} variant='contained' fullWidth sx={{ height: 55 }}>Submit</Button></Grid>

                <Grid item xs={12}>
                    {
                        ishow && <Alert severity='success'>{msg}</Alert>
                    }
                </Grid>

            </Grid>
        </React.Fragment>
    )
}
