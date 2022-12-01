import React from 'react';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
const Main = () => {
    return (
        <Box>
            <Container>
                <Header></Header>
                <Outlet></Outlet>
            </Container>
        </Box>
    );
};

export default Main;