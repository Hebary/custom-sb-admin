import { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import { Grid, IconButton, Table, TableContainer, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Paper, Button} from '@mui/material';
import { EditOutlined, HighlightOff, PersonAddAlt } from '@mui/icons-material';
import { Link }from 'react-router-dom'
import { Layout } from '../../components/layout';
import { customerApi } from '../api';
import { Customer } from '../../interfaces';




export const CustomerList: React.FC = ({}) => {
    
    const [customers, setCustomers] = useState<Customer[]>([]);

    const getCustomers = async ( ) => { 
      const customers = await customerApi.getCustomers();
      setCustomers(customers)
    }

    useEffect(() => {
      getCustomers();
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
    
    
    const rows = customers.map(({ name, lastname, address, email, phone, }) => ({
          name,
          lastname,
          email,
          address,
          phone,
      }));
    
    
    return (
        <Layout>
          <Grid item display='flex' mt={1} mb={4}  justifyContent='space-between'>
            <h1 style={{ padding:0, margin:0 }} className='custom-title'  >Customers</h1>
            <Link to='/customer-edition'>
              <Button sx={{ py: 1}}  variant='contained'  color='info' endIcon={<PersonAddAlt sx={{fontSize:30, mb:.3}} />}>
                Add Customer
              </Button>
            </Link>
          </Grid>
            <Grid container mt={2}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Lastname</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Address</StyledTableCell>
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
                                <StyledTableCell>{row.address}</StyledTableCell>
                                <StyledTableCell>{row.phone}</StyledTableCell>
                                <StyledTableCell>
                                    <IconButton>
                                        <EditOutlined/>        
                                    </IconButton>
                                    <IconButton>
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