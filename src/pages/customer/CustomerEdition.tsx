import { useEffect, useState } from 'react';
import { Box, Button, Chip, Grid, TextField } from '@mui/material'
import { Layout } from '../../components/layout'
import { useNavigate, useParams } from 'react-router-dom';
import { customerApi } from '../api';
import { Customer } from '../../interfaces';
import { ErrorOutline } from '@mui/icons-material';

export const CustomerEdition: React.FC = () => {
  
    const { id } = useParams<{ id: string }>();

    const [customer, setCustomer] = useState<Customer>({
        name: '',
        lastname: '',
        email: '',
        address: '',
        phone: '',
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        checkCustomerId();
    }, [id])   

    const checkCustomerId = async () => {
        if (id !== 'new') {
            const result = await customerApi.getCustomerById(id!);
            setCustomer(result);
        }
    }

    const navigate = useNavigate();

    const saveCustomer = async () => {
        const { name, lastname, email, address, phone } = customer;
        if([name, lastname, email, address, phone].includes('')){
            setError(true);

            setTimeout(() => setError(false),3000);

            return;
        }
        await customerApi.saveCustomer(customer);
        navigate('/customer');
    }

    return (
        <Layout>  
            <h1 style={{ padding:0, marginTop:7.7 }} className='custom-title'  >{ id==='new' ? 'Add Customer' : 'Edit Customer' }</h1>
            <Box className='custom-bs fadeInUp' sx={{ bgcolor:'#fff', width:'450px', m:'15px auto', p: 4, borderRadius: 10 }} >

                        <Grid container spacing={ 3 }>
                        
                            <Grid item xs={ 12 }>
                                <Chip
                                    label='All fields are required'
                                    color='error'
                                    className='fadeInUp'
                                    icon= {<ErrorOutline/>}
                                    variant='outlined'
                                    sx={{ display: error ? 'flex' : 'none' , mt: 1 }}
                                />
                            </Grid>
                           
                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth 
                                    value={ customer.name }
                                    onChange={ (e) => setCustomer({ ...customer, name: e.target.value }) }
                                    placeholder='Name' />
                            </Grid>
                           
                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth 
                                    value={ customer.lastname }
                                    onChange={ (e) => setCustomer({ ...customer, lastname: e.target.value }) }
                                    placeholder='Lastname' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField 
                                    type='email'
                                    fullWidth 
                                    value={ customer.email }
                                    onChange={ (e) => setCustomer({ ...customer, email: e.target.value }) }
                                    variant='filled' 
                                    placeholder='Email' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth 
                                    value={ customer.address }
                                    onChange={ (e) => setCustomer({ ...customer, address: e.target.value }) }
                                    placeholder='Address' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField
                                    variant='filled' 
                                    fullWidth 
                                    value={ customer.phone }
                                    onChange={ (e) => setCustomer({ ...customer, phone: e.target.value }) }
                                    placeholder='Phone' />
                            </Grid>

                            <Grid item xs={ 12 } display='flex' justifyContent='center'>
                                <Button 
                                    sx={{color:'#fff', 
                                    background:'#48a', 
                                    ":hover":{bgcolor:'cornflowerblue'}}} 
                                    fullWidth  
                                    size='large' 
                                    onClick={saveCustomer}
                                    >
                                    { id==='new' ? 'Add Customer' : 'Save Changes' }
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
        </Layout>
  )
}
