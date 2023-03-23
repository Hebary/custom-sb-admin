

interface Props {
    title?: string
    children: React.ReactElement | React.ReactElement[]
}


export const Layout: React.FC<Props> = ({ children, title = '' }) => {
   return (
    <>
         
       {/* <Navbar/> */}
        
       <main style={{ padding: '10px 15px' }}>
            {children}
       </main>
    </>
   )
}