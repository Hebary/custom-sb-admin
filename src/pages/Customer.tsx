import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Layout } from '../components/layout';
import { Grid, IconButton } from '@mui/material';
import { EditOutlined, HighlightOff } from '@mui/icons-material';
    



interface Props {
}

export const Customer: React.FC<Props> = ({}) => {
    
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
      name: string,
      lastname: string,
      email: string,
      address: string,
      phone: string,
    ) {
      return { name, lastname, email, address, phone };
    }
    
    const rows = [
      createData('Javier', 'Peretti','hola@correo.com', 'Stittsville 64', '123456789'),
      createData('Juan', 'Perez','juan@correo.com', 'Ashton 90', '123124122'),
    ];
    
    return (
        <Layout>
            <h1 className='custom-title' >Customers</h1>
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