import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../State/Auth/Action'

const LoginForm = () => {
    const dispatch=useDispatch();
    const Navigate=useNavigate();


    const handleSubmit=(event)=>{
       event.preventDefault()

       const data =new FormData(event.currentTarget);

       const userData={
        eamil:data.get("email"),
        password:data.get("password")

       }
       dispatch(login(userData))
       console.log("userData" ,userData);

    }
  return (
    <div className='md:max-xl:flex'>
       <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          
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
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex item-center'>
            <p>if don't have  account ? <Button onClick={()=>Navigate("/register")} className='ml-5' size='samll'>Register</Button></p>
            
        </div>
      </div>
    </div>
  )
}

export default LoginForm