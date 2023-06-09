import { grey } from '@mui/material/colors';
import { Navbar, Sidebar } from '../ui'
import { Box } from '@mui/material';

interface Props {
    title?: string
    children: React.ReactElement | React.ReactElement[]
}


export const Layout: React.FC<Props> = ({ children }) => {
   return (
      <Box display='flex' bgcolor={grey[300]}>
         <Navbar/>
         <Sidebar/>
         <main style={{ flex:1, marginTop:60, padding:20 }}>
            {children}
         </main>
      </Box>
   )
}