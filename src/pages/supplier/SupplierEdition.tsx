import { useEffect, useState } from 'react';
import { Box, Button, Chip, Grid, TextField } from '@mui/material'
import { Layout } from '../../components/layout'
import { Supplier } from '../../interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { customerApi, supplierApi } from '../api';
import { ErrorOutline } from '@mui/icons-material';

export const SupplierEdition: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [supplier, setSupplier] = useState<Supplier>({
        name: '',
        email: '',
        address: '',
        contact: '',
        web: '',
        phone: '',
    });

    const [error, setError] = useState(false);
    const [dbError, setDbError] = useState(false);

    useEffect(() => {
        checkSupplierId();
    }, [id])   

    const checkSupplierId = async () => {
        if (id !== 'new') {
            const result = await supplierApi.getSupplierById(id!);
            setSupplier(result);
        }
    }

    const navigate = useNavigate();

    const saveSupplier = async () => {
        const { name, contact, email, address, phone, web } = supplier;
        if([name, contact, email, address, phone].includes('')){
            setError(true);

            setTimeout(() => setError(false),3000);

            return;
        }


        await supplierApi.saveSupplier(supplier);
        navigate('/supplier');
    }

return (
    <Layout>  
        <h1 style={{ padding:0, marginTop:7.7, marginBottom:3 }} className='custom-title'  >Suppliers Edition</h1>
        <Box className='custom-bs fadeInUp' sx={{ bgcolor:'#fff', width:'450px', m:'0 auto', p:4, pt:2, borderRadius:10 }} >

                        <Grid container spacing={ 3 }>

                            <Grid item xs={ 12 }>
                                                                
                                <Chip
                                    label='All fileds are requiered'
                                    color='error'
                                    className='fadeIn'
                                    icon= {<ErrorOutline/>}
                                    variant='outlined'
                                    sx={{ display: error ? 'flex' : 'none' , mt: 1 }}
                                />
                                <Chip
                                    label='Email already exists'
                                    color='error'
                                    className='fadeIn'
                                    icon= {<ErrorOutline/>}
                                    variant='outlined'
                                    sx={{ display: dbError ? 'flex' : 'none' , mt: 1 }}
                                />

                            </Grid>
                           
                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth 
                                    value={ supplier.name }
                                    onChange={ ({ target })=>setSupplier({ ...supplier, name: target.value }) }
                                    label='Name' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField 
                                    type='email'
                                    variant='filled' 
                                    fullWidth 
                                    value={ supplier.email }
                                    onChange={ ({target})=> setSupplier({ ...supplier, email: target.value }) }
                                    label='Email' />
                            </Grid>
                           
                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth 
                                    value={ supplier.contact }
                                    onChange={ ({ target }) => setSupplier({...supplier, contact: target.value}) }
                                    label='Contact' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth 
                                    value={ supplier.address }
                                    onChange={ ({ target }) => setSupplier({...supplier, address: target.value}) }
                                    label='Address' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField
                                    variant='filled' 
                                    fullWidth 
                                    value={ supplier.phone }
                                    onChange={ ({ target })=>setSupplier({...supplier, phone: target.value}) }
                                    label='Phone' />
                            </Grid>
                            <Grid item xs={ 12 } >
                                <TextField
                                    variant='filled' 
                                    fullWidth 
                                    value={ supplier.web }
                                    onChange={ ({ target })=>setSupplier({ ...supplier, web: target.value }) }
                                    label='Website' />
                            </Grid>

                            <Grid item xs={ 12 } display='flex' justifyContent='center'>
                                <Button 
                                    onClick={ saveSupplier } 
                                    sx={{color:'#fff', background:'rgb(127, 167, 240)', ":hover":{ bgcolor:'cornflowerblue' }}} 
                                    fullWidth  
                                    size='large' >
                                    { id === 'new'  ? 'Add Supplier' : 'Save Changes' }
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
    </Layout>
  )
}
