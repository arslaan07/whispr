import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'
import { usernameValidator } from '../utils/Validators'
const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const name = useInputValidation("")
  const bio = useInputValidation("")
  const username = useInputValidation("", usernameValidator)
  const password = useStrongPassword()
  const avatar = useFileHandler("single")

  const handleSignUp = (e) => {
    e.preventDefault()
  }
  const handleLogin = (e) => {
    e.preventDefault()
  }

  return <Container component={"main"} maxWidth="xs" sx={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <Paper elevation={3} sx={{
      padding: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {
        isLogin ? <>
        <Typography variant='h5'>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField required fullWidth label="Username" margin="normal" variant='outlined'
          value={username.value} onChange={username.changeHandler} />

          <span style={{height: "10px"}}>
          {
            username.error ? (
              <Typography color='error' variant='caption'>
                {username.error}
              </Typography>
            ) : ' '
          }
          </span>
          
          <TextField required fullWidth label="Password" margin="normal" variant='outlined' type='password' 
          value={password.value} onChange={password.changeHandler}/>
          <span style={{height: "10px"}}>
          {
            password.error ? (
              <Typography color='error' variant='caption'>
                {password.error}
              </Typography>
            ) : ' '
          }
          </span>
          <Button sx={{marginTop: '1rem'}} variant='contained' color='primary' type='submit' fullWidth>Login</Button>
          <Typography sx={{textAlign: "center", marginTop: "1rem"}}>OR</Typography>
          <Button  variant='text'  fullWidth
          onClick={() => setIsLogin(false)}>Sign Up Instead</Button>
        </form>
        </> : <>
        <Typography sx={{marginBottom: "0.5rem"}} variant='h5'>Sign Up</Typography>
        <form onSubmit={handleSignUp}>
          <Stack position={"relative"} width={"10rem"} margin={"auto"}>
            <Avatar sx={{
              width: "10rem",
              height: "10rem",
              objectFit: "contain"
            }} 
            src={avatar.preview}
            />
            <span style={{height: "10px", marginLeft: "15px"}}>
          {
            avatar.error ? (
              <Typography color='error' variant='caption'>
                {avatar.error}
              </Typography>
            ) : ' '
          }
          </span>
            <IconButton sx={{ position: 'absolute', bottom: 0, right: 0, bgcolor: "rgb(0, 0, 0, 0.5)",
               color: "white"
             }} 
             component="label"
             >
              <>
              <CameraAltIcon />
              <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
              </>
            </IconButton>
          </Stack>
          <TextField required fullWidth label="Name" margin="normal" variant='outlined'
          value={name.value} onChange={name.changeHandler} />
          <TextField required fullWidth label="Bio" margin="normal" variant='outlined'
          value={bio.value} onChange={bio.changeHandler} />
          <TextField required fullWidth label="Username" margin="normal" variant='outlined'
          value={username.value} onChange={username.changeHandler} />
          <TextField required fullWidth label="Password" margin="normal" variant='outlined' type='password' 
          value={password.value} onChange={password.changeHandler}/>
          <span style={{height: "10px"}}>
          {
            password.error ? (
              <Typography color='error' variant='caption'>
                {password.error}
              </Typography>
            ) : ' '
          }
          </span>
          <Button sx={{marginTop: '1rem'}} variant='contained' color='primary' type='submit' fullWidth>Sign Up</Button>
          <Typography sx={{textAlign: "center", marginTop: "1rem"}}>OR</Typography>
          <Button  variant='text'  fullWidth
          onClick={() => setIsLogin(true)}>Login Instead</Button>
        </form>
        </>
      }
    </Paper>
  </Container>
}

export default Login
