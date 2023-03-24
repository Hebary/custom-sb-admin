import { Grid, Typography } from "@mui/material"
import { blue, grey, pink } from "@mui/material/colors"
import { Layout } from "../components/layout"
interface Props {
}

export const IndexPage: React.FC<Props> = ({}) => {
   return (
        <Layout>
            <Grid container display='flex' flexDirection={'column'}>
               <Grid item>
                  <Typography fontWeight={900} fontSize={50} color={grey[900]}>Welcome To Sb Admin</Typography>  
               </Grid>
               <Grid item>
                  <Typography  fontWeight={900} fontSize={50} color={blue[900]}>The Custom Manger for</Typography>  
               </Grid>
               <Grid item>
                  <Typography  fontWeight={900} fontSize={50} color={pink[900]}>Customers, Employees & Suppliers.</Typography>  
               </Grid>
            </Grid>
        </Layout>
    )
}
