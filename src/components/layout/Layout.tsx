import { Sidebar } from '../ui'
import { Box } from '@mui/material';

interface Props {
    title?: string
    children: React.ReactElement | React.ReactElement[]
}


export const Layout: React.FC<Props> = ({ children, title = '' }) => {
   return (
    <Box display='flex'>
         
       <Sidebar/>
        
       <main style={{ flex:1 }}>
            {children}
       </main>
    </Box>
   )
}