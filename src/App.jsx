import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box, Typography } from '@mui/material'
import SignIn from './SignIn'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box>
        <Typography variant="h1">Hello Vite + React!</Typography>
      </Box>
      <SignIn />
    </>
  )
}

export default App
