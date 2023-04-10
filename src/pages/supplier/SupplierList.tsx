import { useEffect, useState } from 'react';

import { Grid, IconButton, Table, TableContainer, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Paper, Button } from '@mui/material';
import { EditOutlined, HighlightOff, PersonAddAlt } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import { Layout } from '../../components/layout';
import { Link } from 'react-router-dom';
import { supplierApi } from '../api';
import { Supplier } from '../../interfaces';




export const SupplierList: React.FC = () => {

  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    

    const getSuppliers = async ( ) => { 
      const suppliers = await supplierApi.getSuppliers();
      setSuppliers(suppliers)
    }

    useEffect(() => {
      getSuppliers();
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
    
    
    
    const rows = suppliers.map(({ name, email, contact, address, phone, web, id }) => ({
        name,
        email,
        contact,
        address,
        phone,
        web,
        id
    }));
    
    const deleteSupplier = async (id: string) => {
      await supplierApi.deleteSupplierById(id);
      getSuppliers();
    }

    return (
        <Layout>
            <Grid item display='flex' mt={1} mb={4} className='fadeIn' justifyContent='space-between'>
            <h1 style={{ padding:0, margin:0 }} className='custom-title'  >Suppliers</h1>
            <Link to='/supplier/new'>
              <Button sx={{ py: 1, mt:1.3}}  variant='contained'  color='info' endIcon={<PersonAddAlt sx={{fontSize:30, mb:.3}} />}>
                Add Supplier
              </Button>
            </Link>
          </Grid>
            <Grid container mt={2} className='fadeIn'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Contact</StyledTableCell>
                                <StyledTableCell>Address</StyledTableCell>
                                <StyledTableCell>Phone</StyledTableCell>
                                <StyledTableCell>Web</StyledTableCell>
                                <StyledTableCell>Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                                <StyledTableCell>{row.email}</StyledTableCell>
                                <StyledTableCell>{row.contact}</StyledTableCell>
                                <StyledTableCell>{row.address}</StyledTableCell>
                                <StyledTableCell>{row.phone}</StyledTableCell>
                                <StyledTableCell>{row.web}</StyledTableCell>
                                <StyledTableCell>
                                    <IconButton
                                      component={Link}
                                      to={`/supplier/${row.id}`}
                                    >
                                        <EditOutlined/>        
                                    </IconButton>
                                    <IconButton
                                      onClick={()=> deleteSupplier(row.id!)}
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