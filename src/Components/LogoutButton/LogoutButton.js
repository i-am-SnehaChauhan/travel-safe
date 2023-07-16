import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import {Button} from '@mui/material'

const LogoutButton = () => {
  const {logout, isAuthenticated} = useAuth0;

  return (
    isAuthenticated && (
      <Button variant="outlined" onClick={() => logout}>
         Logout
      </Button>
    )
    
  )
}

export default LogoutButton;