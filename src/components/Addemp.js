
import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';


const Addemp = () => {
    const{register,handleSubmit}=useForm();
    const getVal=(val)=>{
            
            alert('form submitted');
            axios.post('https://reqres.in/api/users',val).then((response)=>{
                console.log(response)
                alert(`data is posted with id ${response.data.id}`)
            })
    }
  return (
    <div>
     
      <Stack
      component="form"
      sx={{
        
        marginTop:"50px",
        marginLeft:"40%",
        width:"25ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='empname'
      {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="employ name"
        variant="filled"
        
      />
      <TextField
      name='emplocation'
      {...register('emplocation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="employ location"
        variant="filled"
      />
      <TextField
      name='empdesignation'
      {...register('empdesignation')}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="employ designation"
        variant="filled"
        
      />
      <Button onClick={handleSubmit(getVal)} variant="contained">submit</Button>
    </Stack>
    </div>
  )
}

export default Addemp
