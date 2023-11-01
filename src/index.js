import React from 'react';
import './App.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    greenish: "#149e9e",
    blackish: "#000100"
  }
}




const container = document.getElementById('root');
const root = createRoot(container);
root.render
  (
    < ThemeProvider theme={theme} >
      <App />

    </ThemeProvider >
  );


