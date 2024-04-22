import { useState } from 'react';
import { Button, Typography, Container, Box, Card, CardContent, TextareaAutosize } from '@mui/material';
import { useSelector } from 'react-redux';

const TextCard = () => {
  const [text, setText] = useState('');
  const [currentStyle, setCurrentStyle] = useState('normal');
  const user = useSelector(store => store.user.userDetails);
  
  console.log(user);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBold = () => {
    setCurrentStyle('bold');
  };

  const handleItalic = () => {
    setCurrentStyle('italic');
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Center vertically on the screen
      }}
    >
      <Card
        sx={{
          width: '70%',
          borderRadius: '15px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          marginBottom: '20px',
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Text Card
          </Typography>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="detail..."
            minRows={10}
            maxRows={20}
            style={{
              width: '100%',
              resize: 'none',
              marginBottom: '20px',
              fontWeight: currentStyle === 'bold' ? 'bold' : 'normal',
              fontStyle: currentStyle === 'italic' ? 'italic' : 'normal',
            }}
            value={text}
            onChange={handleChange}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="primary" onClick={handleBold}>
              Bold
            </Button>
            <Button variant="contained" color="primary" onClick={handleItalic}>
              Italic
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TextCard;
