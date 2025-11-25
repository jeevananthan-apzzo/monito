import { Container, Grid } from '@mui/material'
import React from 'react'
import AccountSidebar from './AccountSidebar'

const AccountLayout = ({children}:any) => {
  return (
    <Container maxWidth="xl">
      <Grid container columnSpacing={4} mb={6}>
        <Grid size={3} sx={{display: {xs: "none", md: "grid"}}}><AccountSidebar/></Grid>
        <Grid size={{xs: 12, md: 9}}>{children}</Grid>
      </Grid>
    </Container>
  )
}

export default AccountLayout