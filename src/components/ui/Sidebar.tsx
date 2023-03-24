import  { Box, Divider, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { NavLink } from 'react-router-dom'



interface Props {
}

export const Sidebar: React.FC<Props> = ({}) => {
   return (
        <Box sx={{ p: 3, height:'100vh', width:250, background: grey[900]}}>
            <Box display='flex' gap={3} flexDirection='column' mt={10} >
                <NavLink color='#fff' className='custom-link' to="/customer">Customer</NavLink>
                <NavLink color='#fff' className='custom-link' to="/employee">Employee</NavLink>
                <NavLink color='#fff' className='custom-link' to="/supplier">Supplier</NavLink>
            </Box>
            <Divider color='#fff' sx={{mt:5}} />
        </Box>
    )
}
