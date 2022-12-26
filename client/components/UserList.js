import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { allusers, fetchUsers } from "../reducers/usersSlice"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';





const UserList = () => {

    const users = useSelector(allusers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    console.log(users)

    let usersMap = users.map((user) => 
    <Grid item xs={3}>

    <div id='card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={user.image}
          alt="person image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {user.name}          </Typography>
          <Typography variant="body2" color="text.secondary">
          {user.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
        </Grid>
    )

    return (
        <>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">

          <Typography variant="h6" color="inherit" component="div">
            Family Members - List of all family members taken from external Amazon RDS Postgresql Database 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="left"
>        {usersMap}
        </Grid>
        </>
    )
}

export default UserList