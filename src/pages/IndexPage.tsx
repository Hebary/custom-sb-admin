import { Typography } from "@mui/material"
import { Layout } from "../components/layout"




interface Props {
}

export const IndexPage: React.FC<Props> = ({}) => {
   return (
        <Layout>
           <Typography component='h1'>IndexPage</Typography>  
        </Layout>
    )
}
