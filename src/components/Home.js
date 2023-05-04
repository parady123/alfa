import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'
import './Home.css';
import axios from 'axios';
const Home = () => {
    var[value,setValue]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((response)=>{
            console.log(response.data.users);
            setValue(value=response.data.users);
        })
    },[])
  return (
    <div>
        <Typography>welcome home page</Typography>
        <Table class='sad'>
            <TableHead class='pen'>

                <TableRow>
                    <TableCell>Fname</TableCell>
                    <TableCell>lname</TableCell>
                    <TableCell>age</TableCell>
                    
                    

                </TableRow>
            </TableHead>
            <TableBody>
                {
                   value.map((data,ind)=>{
                    return <TableRow>
                        <TableCell>{data.firstName}</TableCell>
                        <TableCell>{data.lastName}</TableCell>
                        <TableCell>{data.age}</TableCell>
                    </TableRow>

                   }) 
                }

            </TableBody>
        </Table>
    </div>
  )
}

export default Home
