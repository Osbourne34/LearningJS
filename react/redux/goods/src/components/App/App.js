import { Routes, Route, Link } from 'react-router-dom';

import { Container, Box, Button } from '@mui/material';

import Search from './../Search';
import Goods from './../Goods';
import Form from './../Form';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'space-between',
                            mb: 4
                        }}
                    >
                        <Search />
                        <Link to="addition">
                            Add Product
                        </Link>
                    </Box>
                    <Goods />
                </Container>}
            />
            <Route path="/addition" element={<Form />} />
        </Routes >
    );
}

export default App;
