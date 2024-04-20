import  { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [backgroundColor , setBackgroundColor]  = useState('linear-gradient(to top, #000000, #000000)')

    //  update count function and save the updated value
    const updateCount = (newCount) => {
        setCount(newCount);
        localStorage.setItem('counterValue', newCount);
    };

    useEffect(() => {
        // taking value from local storage
        const storedValue = localStorage.getItem('counterValue');
        if (storedValue !== null) {
            setCount(parseInt(storedValue));
        }
    }, []); 

    // useeffect that taking chanage color on count update
    useEffect(()=>{
            const colorCalcutaion = (val) =>{
                val = Math.abs(val);
                    const r = Math.floor(val * 10);
                    const g = Math.floor(val * 5);
                    const b = Math.floor(val * 2);
                    return `linear-gradient(to top, rgb(0,0,0), rgb(${r},${g},${b}) )`
            }

            setBackgroundColor(colorCalcutaion(count));
    },[count])

    // Handler functions for increment, decrement, and reset
    const handleIncrement = () => {
        updateCount(count + 1);
    };

    const handleDecrement = () => {
        updateCount(count - 1);
    };

    const handleReset = () => {
        updateCount(0);
    };
    const theme = createTheme({
        typography: {
            h4: {
                color: '#ffffff',
                textAlign: 'center',
                 padding: '16px',
                 
            },
            h5:{
               color: '#ffffff' 
            },
           
        },
      })

    return (
       <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 400, margin: 'auto', marginBottom: '20px', background: backgroundColor }}>
            <CardActionArea>
                {/* Display the count */}
               
                {/* <div style={{ textAlign: 'center', padding: '16px' }}> */}
                    <Typography variant="h4" component="div" gutterBottom>
                        {count}
                    </Typography>
                {/* </div> */}
             
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        COUNTER
                    </Typography>

                    {/* Buttons for increasing, decreasing, and resetting the counter */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                        <Button variant="contained" color="error" onClick={handleDecrement} style={{ marginRight: '10px' }}>
                            DECREASE
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={handleReset} style={{ marginRight: '10px' }}>
                            RESET
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleIncrement}>
                            INCREASE
                        </Button>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
        </ThemeProvider>
    );
};

export default Counter;
