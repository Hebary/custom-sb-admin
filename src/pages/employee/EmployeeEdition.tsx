import { useEffect, useState } from 'react';
import { Box, Button, Chip, Grid, TextField } from '@mui/material'
import { Layout } from '../../components/layout'
import { useNavigate, useParams } from 'react-router-dom';
import { employeeApi } from '../api';
import { Employee } from '../../interfaces';
import { ErrorOutline } from '@mui/icons-material';

export const EmployeeEdition: React.FC = () => {
  
const { id } = useParams<{ id: string }>();

    const [employee, setEmployee] = useState<Employee>({
        name: '',
        lastname: '',
        email: '',
        address: '',
        salary: 0,
        phone: '',
    });

    const [error, setError] = useState(false);

    useEffect(() => {
        checkEmployeeId();
    }, [id])   

    const checkEmployeeId = async () => {
        if (id !== 'new') {
            const result = await employeeApi.getEmployeeById(id!);
            setEmployee(result);
        }
    }

    const navigate = useNavigate();

    const saveEmployee = async () => {
        const { name, lastname, email, address, salary , phone } = employee;

        if([name, lastname, email, salary, address, phone].includes('')){
            setError(true);

            setTimeout(() => setError(false),3000);

            return;
        }
        await employeeApi.saveEmployee(employee);
        navigate('/employee');
    }
return (

    <Layout>  
        <h1 style={{ padding: 0, marginTop: 7.7, marginBottom: 3 }} className='custom-title'>Employees Edition</h1>
        <Box className='custom-bs fadeInUp' sx={{ bgcolor:'#fff', width:'450px', m:'10px auto', p: 4, pt: 2, borderRadius: 10 }} >

                        <Grid container spacing={ 3 }>
                            <Grid item xs={ 12 }>
                                <Chip
                                    label='All fields are required'
                                    color='error'
                                    className='fadeIn'
                                    icon= {<ErrorOutline/>}
                                    variant='outlined'
                                    sx={{ display: error ? 'flex' : 'none' , mt: 1 }}
                                />

                            </Grid>
                           
                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled'
                                    value={employee.name} 
                                    fullWidth 
                                    label='Name' />
                            </Grid>
                           
                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth
                                    value={employee.lastname} 
                                    label='Lastname' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField 
                                    type='email'
                                    variant='filled' 
                                    fullWidth
                                    value={employee.email} 
                                    label='Email' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField 
                                    variant='filled' 
                                    fullWidth
                                    value={employee.address} 
                                    label='Address' />
                            </Grid>

                            <Grid item xs={ 12 } >
                                <TextField
                                    variant='filled' 
                                    fullWidth
                                    value={employee.phone} 
                                    label='Phone' />
                            </Grid>
                            <Grid item xs={ 12 } >
                                <TextField
                                    type='number'
                                    variant='filled'
                                    value={ employee.salary } 
                                    fullWidth 
                                    label='Salary' />
                            </Grid>

                            <Grid item xs={ 12 } display='flex' justifyContent='center'>
                                <Button
                                    onClick={ saveEmployee } 
                                    sx={{color:'#fff', background:'rgb(127, 167, 240)', ":hover":{bgcolor:'cornflowerblue'}}} fullWidth  size='large' >
                                   { id==='new' ? 'Add Employee' : 'Save Changes' }
                                </Button>
                            </Grid>

                        </Grid>
                    </Box>
    </Layout>
  )
}
