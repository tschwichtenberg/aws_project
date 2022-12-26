import React, { useEffect, useState } from "react";
import UserList from './UserList'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';


const Main = () => {
    const [pets, setPets] = useState([]);


    useEffect(() => {
        axios.get('https://ksggctr5q3.execute-api.us-east-2.amazonaws.com/dev/pets')
            .then(res => setPets(res.data.body))
            .catch(err => console.log(err));
    }, [])

    console.log(pets)
    let petsMap = pets.map((pet) =>
    <Grid item xs={3}>

    <div id='card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={pet.image}
          alt="pet image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {pet.name}          </Typography>
          <Typography variant="body2" color="text.secondary">
          {pet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
        </Grid>
    )

    return (
        <>
  
            <UserList />


            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">

          <Typography variant="h6" color="inherit" component="div">
            Pets - List of all pets returned from AWS API Gateway request which connects to an AWS Lambda Function that returns an array of pets.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="left"
>  
            {petsMap}
        </Grid>
        </>
    )
}

export default Main