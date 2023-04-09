import { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import { Grid, IconButton, Table, TableContainer, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Paper, Button} from '@mui/material';
import { EditOutlined, HighlightOff, PersonAddAlt } from '@mui/icons-material';
import { Link }from 'react-router-dom'

import { Layout } from '../../components/layout';
import { employeeApi } from '../api';
import { Employee } from '../../interfaces';




export const EmployeeList: React.FC = ({}) => {
    
    const [employees, setEmployees] = useState<Employee[]>([]);
    

    const getEmployees = async ( ) => { 
      const employees = await employeeApi.getEmployees();
      setEmployees(employees)
    }

    useEffect(() => {
      getEmployees();
    }, [])
    


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));
    
    
    const rows = employees.map(({ name, lastname,salary, address, email, phone, id }) => ({
          name,
          lastname,
          email,
          address,
          phone,
          salary,
          id
      }));


      const onDeleteEmployee = async (id: string) => {
        const deletedEmployee = await employeeApi.removeEmployee(id);
        
        if (deletedEmployee) {
          getEmployees();
        }
      }
    
    return (
        <Layout>
          <Grid item display='flex' mt={1} mb={4} className='fadeIn' justifyContent='space-between'>
            <h1 style={{ padding:0, margin:0 }} className='custom-title'  >Employees</h1>
            <Link to='/employee/new'>
              <Button sx={{ py: 1, mt:1.3}}  variant='contained'  color='info' endIcon={<PersonAddAlt sx={{fontSize:30, mb:.3}} />}>
                Add Employee
              </Button>
            </Link>
          </Grid>
            <Grid container mt={2} className='fadeIn'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Lastname</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Address</StyledTableCell>
                                <StyledTableCell>Salary</StyledTableCell>
                                <StyledTableCell>Phone</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                  {row.name}
                                </StyledTableCell>
                                <StyledTableCell>{row.lastname}</StyledTableCell>
                                <StyledTableCell>{row.email}</StyledTableCell>
                                <StyledTableCell>{row.salary}</StyledTableCell>
                                <StyledTableCell>{row.address}</StyledTableCell>
                                <StyledTableCell>{row.phone}</StyledTableCell>
                                <StyledTableCell>
                                    <IconButton
                                        component={Link}
                                        to={`/employee/${row.id}`}
                                    >
                                        <EditOutlined/>        
                                    </IconButton>
                                    <IconButton
                                      onClick={()=> onDeleteEmployee(String(row.id))}
                                    >
                                        <HighlightOff/>
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Layout>
    );
}