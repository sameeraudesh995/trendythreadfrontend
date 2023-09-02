
import { Button, Grid, TextField, Snackbar, Alert } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';
import { getUser, register } from "../../State/Auth/Action";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const Navigate = useNavigate();
    const dispatch=useDispatch();
    const [openSnackBar,setOpenSnackBar]=useState(false);
    const jwt=localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);
    const handleClose=()=>setOpenSnackBar(false);

    useEffect(()=>{
      if(jwt){
        dispatch(getUser(jwt))
      }
    
    },[jwt, auth.jwt])

  
    
    
      useEffect(() => {
        if (auth.user || auth.error) setOpenSnackBar(true)
      }, [auth.user]);
      
    const handleSubmit=(event)=>{
       event.preventDefault()

       const data =new FormData(event.currentTarget);

       const userData={
        firstName:data.get("firstName"),
        lastName:data.get("lastName"),
        eamil:data.get("email"),
        password:data.get("password")

       }
       dispatch(register(userData))
       console.log("userData" ,userData);

    }
  return (
    <div >
       <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0", bgcolor:"#9155FD"}}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex item-center'>
            <p>if you already have account ? <Button onClick={()=>Navigate("/login")} className='ml-5' size='samll'>
              Login
              </Button>
              </p>
            
        </div>
      </div>
      <Snackbar open={setOpenSnackBar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {auth.error?auth.error:auth.user?"Register Success":""}
        </Alert>
      </Snackbar>

    </div>
  )
}

export default RegisterForm