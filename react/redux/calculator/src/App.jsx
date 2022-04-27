import { Container, Grid, Button, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setValueAction, calculationAction, clearValueAction, setIsComputedAction } from './redux/actions';

import './App.css';

const calculator = [
    1, 2, 3, '-',
    4, 5, 6, '+',
    7, 8, 9, '*',
    0, '.', '=', '/'
]

const App = () => {
    const value = useSelector(state => state.value);
    const isComputed = useSelector(state => state.isComputed);
    const dispatch = useDispatch();

    const setValue = (value) => {
        console.log(isComputed);
        dispatch(setValueAction(String(value)));
    }

    const calculation = () => {
        try {
            dispatch(setIsComputedAction());
            dispatch(calculationAction(eval(value)));
        } catch (err) {
            alert('Введено неверное выражение')
        }
    }

    const clearValue = () => {
        if (value !== '0') {
            dispatch(clearValueAction());
        }
    }

    return (
        <Container maxWidth="sm">
            <Grid container spacing={1}>
                <Grid item xs={12} >
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        value={value}
                    />
                </Grid>

                {
                    calculator.map(item => {
                        // primary
                        if (!isNaN(parseFloat(item)) && isFinite(item) || item === '.') {
                            return (
                                <Grid key={item} item xs={3}>
                                    <Button onClick={() => setValue(item)} fullWidth={true} variant="contained">{item}</Button>
                                </Grid>
                            )
                        }
                        // secondary
                        if (item === '=') {
                            return (
                                <Grid key={item} item xs={3}>
                                    <Button onClick={() => calculation()} fullWidth={true} variant="contained" color="secondary">{item}</Button>
                                </Grid>
                            )
                        }
                        // success
                        return (
                            <Grid key={item} item xs={3}>
                                <Button onClick={() => setValue(item)} fullWidth={true} variant="contained" color="success">{item}</Button>
                            </Grid>
                        )
                    })
                }

                <Grid item xs={12}>
                    <Button onClick={clearValue} fullWidth={true} variant="contained" color="error">Очистить</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default App;