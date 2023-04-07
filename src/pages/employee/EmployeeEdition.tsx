import { useState } from 'react';
import { Box, Button, Chip, Grid, TextField } from '@mui/material'
import { Layout } from '../../components/layout'

export const EmployeeEdition: React.FC = () => {
  
const [error, setError] = useState(false);

return (
    <Layout>  
        <h1 style={{ padding:0, marginTop:7.7, marginBottom: 3 }} className='custom-title'  >Employees Edition</h1>
        <Box className='custom-bs fadeInUp' sx={{ bgcolor:'#fff', width:'450px', m:'10px auto', p:4, pt:2, borderRadius:10 }} >

                        <Grid container spacing={ 3 }>

                            <Grid item xs={ 12 }>
                                {/*                                 
                                <Chip
                                    label='Please check your credentials'
                                    color='error'
                                    className='fadeIn'
                                    icon= {<ErrorOutline/>}
                                    variant='outlined'
                                    sx={{ display: error ? 'flex' : 'none' , mt: 1 }}
                                /> */}

                            </Grid>
                           
                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth 
                                    label='Name' />
                            </Grid>
                           
                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth 
                                    label='Lastname' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField 
                                    type='email'
                                    variant='filled' 
                                    fullWidth 
                                    label='Email' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth 
                                    label='Address' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField
                                    variant='filled' 
                                    fullWidth 
                                    label='Phone' />
                            </Grid>
                            <Grid item xs={ 12 } >
                                <TextField
                                    type='number'
                                    variant='filled' 
                                    fullWidth 
                                    label='Salary' />
                            </Grid>

                            <Grid item xs={ 12 } display='flex' justifyContent='center'>
                                <Button sx={{color:'#fff', background:'rgb(127, 167, 240)', ":hover":{bgcolor:'cornflowerblue'}}} fullWidth  size='large' >
                                    Save changes
                                </Button>
                            </Grid>

                        </Grid>
                    </Box>
    </Layout>
  )
}
