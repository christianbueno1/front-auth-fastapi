import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box, Typography } from '@mui/material'
import SignIn from './SignIn'
import AuthContext from './context/AuthProvider'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const { auth } = useContext(AuthContext);
  const authMessage = auth ? 'Authenticated' : 'Not Authenticated';
  useEffect(() => {
    console.log('auth', auth);
  }, [auth]);
  
  return (
    <>
      <Box>
        <Typography variant="h1">Hello Vite + React!</Typography>
        <Typography variant="h2">{authMessage}</Typography>
      </Box>
      <SignIn />
    </>
  )
}

export default App
