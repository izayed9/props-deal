import { Grid, Typography, Button, Container} from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Section = () => {
    return (
        <Container maxWidth="lg">
            <Header />
            <Grid container spacing={3} >
                <Grid item md={4}>
                <Typography variant="h6" component="h6" >
                   Your companion <br/>
                    for prayers in congregation
                    </Typography>
                    <Typography variant="body1">
                   Your companion <br/>
                    for prayers in congregation
                    </Typography>
                    <Button variant='contained'>Submit</Button>

                </Grid>
                <Grid item md={4}>
                <Typography variant="h6" component="h6" >
                   Your companion <br/>
                    for prayers in congregation
                    </Typography>
                    <Typography variant="body1">
                   Your companion <br/>
                    for prayers in congregation
                    </Typography>
                    <Button variant='contained'>Submit</Button>
                </Grid>
                <Grid item md={4}>
                <Typography variant="h6" component="h6" >
                   Your companion <br/>
                    for prayers in congregation
                    </Typography>
                    <Typography variant="body1">
                   Your companion <br/>
                    for prayers in congregation
                    </Typography>
                    <Button variant='contained'>Submit</Button>
                </Grid>
                </Grid>
            <Footer />
        </Container>
    )
}

export default Section
