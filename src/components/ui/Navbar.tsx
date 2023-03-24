

import { NavLink } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import logo from '../../assets/react.svg';


export const Navbar: React.FC = () => {


return (
    <AppBar  sx={{ display:'flex', background: grey[900], height:70, py:2}}>
        <Toolbar >
        <Box display='flex' pb={2.5}>
          <NavLink to='/'>
            <img src={logo} alt='react-logo' />
          </NavLink>
        </Box>
        <Box flex={1}/>
        <Box display='flex' sx={{mb: 3}} gap={3}>
            <Typography>
              <NavLink color='#fff' to="/">Home</NavLink>
            </Typography>
            <Typography>
              <NavLink color='#fff' to="/about">About</NavLink>
            </Typography>
            <Typography>
              <NavLink color='#fff' to="/users">Users</NavLink>
            </Typography>
        </Box>
        </Toolbar>
    </AppBar>
    )
}
