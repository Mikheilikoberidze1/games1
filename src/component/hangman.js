import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Box, Grid, Toolbar, Typography,Container,Button} from '@mui/material';
import { useEffect, useState } from 'react';
import { getRandomWord, isAllowedCharacter } from '../utils/client';
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const lighTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  
  const styles = ({
    logo: {
      height: 40,
    },
    word: {
      fontSize: 50, 
      letterSpacing: 20,
      fontWeight: 'bold',
      marginTop: 30,
    }
  })
function Hangman (){
    const [word, setWord] = useState();
  const [currentState, setCurrentState] = useState([]);
  const [mistakes, setMistakes] = useState([]);
  const [changeimg,setChangeimg]= useState(0);
  const { darkMode } = useContext(ThemeContext);
 
   
 document.onkeyup = function(event) {
  processKeyPress(event.key);
 }
  

useEffect(() => {
    const word = getRandomWord();
    setWord(word.toLowerCase());
    {console.log(word.toLowerCase())};
  }, []);

  useEffect(() => {
    if (!word || word.length === 0) {
      return;
    }
    let initialState = '';
    for (let i = 0; i < word.length; i++) {
      if(word[i] === ' '||word[i]==='-') initialState = `${initialState}${word[i]}`; 
      else initialState = `${initialState}_`;
    } 
    setCurrentState(initialState);
  }, [word]);
  
  const processKeyPress = (key) => {
    if (!isAllowedCharacter(key)) {
      return;
    }
    key = key.toLowerCase();
    if (mistakes.includes(key)) {
      return;
    }
    if (word.indexOf(key) < 0) {
      setMistakes([key, ...mistakes]);
      return;
    }
    let newState = '';
    for (let i = 0; i < word.length; i++) {
      if (word[i] === key) {
        newState = `${newState}${key}`;
      } else {
        newState = `${newState}${currentState[i]}`;
      }
    }
    setCurrentState(newState);
  }

  
  function generateButtons() {
    const rows = [
      "qwertyuiop",
      "asdfghjkl",
      "zxcvbnm"
    ];
  
    return rows.map(row => (
      <div className="row">
        {row.split("").map(letter => (
          <button
            className='btn btn-primary hangmanbutton'
            disabled={mistakes.includes(letter) || currentState.includes(letter)}
            onClick={() => processKeyPress(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    ));
  }

  const showresult=(yay)=>{
    return (
      <div>
      <ThemeProvider theme={darkMode ? darkTheme : lighTheme}>
    <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        
      </AppBar>
    </Box>
    <div className='hangmanmaindiv'>
    <main>
    <Grid container spacing={2} className='currentstate'>
      {yay}<br/>
      </Grid>
    </main>
      <Container fixed style={{'justifyContent': 'center','alignItems': 'center','display': 'flex','marginTop': '30px','flexDirection':'column'}}>
      <img src={require(`../images/${changeimg}.jpg`)} alt="Hangman Logo" style={{height:'400px'}}/>
      <Button style={{'marginTop':'15px'}} variant="contained" color="success" onClick={()=>{setMistakes([]);const word = getRandomWord();setWord(word.toLowerCase());console.log(word);}} >
      Restart
      </Button>
      </Container>
      </div>
    </ThemeProvider>
    </div>
  );
  }
  const showresultsbefore=()=>{
    return (
      <div>
      <ThemeProvider theme={darkMode ? darkTheme : lighTheme}>
    <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        
      </AppBar>
    </Box>
    <div className='hangmanmaindiv'>
    <main>
    <Grid container spacing={2} className='currentstate'>
      {currentState}<br/>
      </Grid>
      <Grid container spacing={2} className='mistakes'>
       Mistakes: {mistakes.length}<br/>
      </Grid>
    </main>
    <Container fixed style={{'justifyContent': 'center','alignItems': 'center','display': 'flex','marginTop':'30px'}}>
    <img src={require(`../images/${changeimg}.jpg`)} alt="Hangman Logo" style={{height:'400px'}}/>
    </Container>
    <div className="keyboard">
      {generateButtons()}
      </div>
      </div>
  </ThemeProvider>
  </div>
);

  }
  useEffect(()=>{
    for(let i=0;i<7;i++){
    if(mistakes.length === i) setChangeimg(i);
    }
    
  },[mistakes,changeimg])
  

if(mistakes.length>=6){
    
  return showresult('You Lose');
}
else if(currentState===word) return showresult('You Win');
else{
 return showresultsbefore();
}
}

export default Hangman;