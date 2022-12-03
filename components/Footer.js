import React from 'react';
import { Box, Container,Grid, Link} from '@mui/material';

const Footer = () => {
  return (
    <Box 
     px={{ xs: 3, sm: 10 }}
     py={{ xs: 5, sm: 10 }}
    bgcolor="secondary.main" color="white" mt-20>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>QuickLinks</Box>
            <Box>
              <Link href="/" color="inherit">
                Physiotherapy
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Wheelchairs
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Labaratory
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Support
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Exercise Equipments
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Company</Box>
            <Box>
              <Link href="/" color="inherit">
                About
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Privacy Policy
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                FAQ
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Support
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Delivery Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Contacts</Box>
            <Box>
              <Link href="/" color="inherit">
                Email
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
               Facebook
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                LinkedIn
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Twitter
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{xs: 5, sm:10}} pb={{xs: 5, sm:0 }}>
          All Rights Reserved CureSphere &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  )
}
export default Footer