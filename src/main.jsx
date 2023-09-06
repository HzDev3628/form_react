import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import './index.scss'

const theme = createTheme({
  palette: {
    myColorSwitch: {
      main: '#424242',
      light: '#424242',
      dark: '#424242',
      contrastText: '#fff'
    },

    myColorCheckbox: {
      main: '#4e3bb6',
      light: '#4e3bb6',
      dark: '#4e3bb6',
      contrastText: '#fff'
    }
  }
})




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  </React.StrictMode>
)
