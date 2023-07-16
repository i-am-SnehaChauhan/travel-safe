import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import { Button } from '@mui/material'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        variant="outlined"
        onClick={() => loginWithRedirect()}
        sx={{ marginLeft: '20px' }} // Add left margin here
      >
         Login
      </Button>
    )
  )
}

export default LoginButton;
