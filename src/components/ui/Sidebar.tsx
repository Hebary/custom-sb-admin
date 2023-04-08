import  { Box, Divider, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { NavLink } from 'react-router-dom'



interface Props {
}

export const Sidebar: React.FC<Props> = ({}) => {
   return (
        <Box sx={{ p: 3, height:'120vh', width:250, background: grey[900] }}>
            <Box display='flex' gap={ 3 } flexDirection='column' mt={ 10 } >
                <NavLink color='#fff' className='custom-link' to="/customer">Customers</NavLink>
                <NavLink color='#fff' className='custom-link' to="/employee">Employees</NavLink>
                <NavLink color='#fff' className='custom-link' to="/supplier">Suppliers</NavLink>
            </Box>
            <Divider color='#fff' sx={{mt:5}} />
        </Box>
    )
}
