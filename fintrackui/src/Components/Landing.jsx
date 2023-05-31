import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { Expenses } from "./Expenses";
import { Earning } from "./Earning";
import { Nav } from "./Nav";

export const Landing = () => {
    return (
        <React.Fragment>

            <Card>
                <CardContent sx={{ bgcolor: "lightslategray" }}>

                    <BrowserRouter>

                        <Nav />

                        <Routes>

                            <Route path="/home" element={<Home />} />

                            <Route path="/dashboard" element={<Dashboard />} />

                            <Route path="/expenses" element={<Expenses />} />

                            <Route path="/earning" element={<Earning />} />

                            <Route path="/" element={<Home />} />

                        </Routes>
                    </BrowserRouter>

                </CardContent>
            </Card>

        </React.Fragment >
    )
};
