import { Link } from 'react-router-dom';
import { TextField, Container, Box, Button } from '@mui/material';

const Form = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                mt: 5
            }}
        >
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <TextField sx={{ mb: 3 }} id="outlined-basic" label="Title" variant="outlined" />
                <TextField sx={{ mb: 3 }} id="outlined-basic" label="Description" variant="outlined" />
                <TextField sx={{ mb: 3 }} id="outlined-basic" label="Price" variant="outlined" />
                <TextField sx={{ mb: 3 }} id="outlined-basic" label="ImageUrl" variant="outlined" />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button variant="contained" color="success">
                        Add Product
                    </Button>
                    <Link component="button" to="/">Cancel</Link>
                </Box>
            </form>
        </Container>
    )
}

export default Form;