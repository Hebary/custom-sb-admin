import { useEffect, useState } from 'react';

import { Grid, IconButton, Table, TableContainer, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Paper, Button } from '@mui/material';
import { EditOutlined, HighlightOff, PersonAddAlt } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import { Layout } from '../components/layout';



interface Props {
}

export const SupplierList: React.FC<Props> = ({}) => {
    
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
    
    function createData(
      name   : string,
      email  : string,
      contact: string,
      address: string,
      phone  : string,
      web    : string,
    ) {
      return { name, email, address, phone, web, contact };
    }
    
    const rows = [
      createData('Alan','alan@correo.com', 'Digital Services', 'Av. Piura 64', '123456789', 'https://this.com.ar'),
      createData('Manfred', 'manfred@correo.com','Custom S.A', 'Av. Cabrera 20', '123124122', 'https://thong.com.ar'),
    ];
    
    return (
        <Layout>
            <Grid item display='flex' mt={1} mb={4}  justifyContent='space-between'>
              <h1 style={{ padding:0, margin:0 }} className='custom-title'  >Customers</h1>
              <Button variant='contained' color='secondary' endIcon={<PersonAddAlt/>} sx={{py:1}}>Add Supplier</Button>
            </Grid>
            <Grid container mt={2}>
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