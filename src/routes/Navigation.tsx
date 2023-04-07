import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomerList, CustomerEdition, EmployeeList, IndexPage, SupplierList, EmployeeEdition, SupplierEdition } from "../pages";

export const Navigation: React.FC = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element ={ <IndexPage/> }/>
              
              <Route path="/customer" element={ <CustomerList/> } />
              <Route path="/customer-edition" element={ <CustomerEdition/> } />

              <Route path="/employee" element={ <EmployeeList/> } />
              <Route path="/employee-edition" element={ <EmployeeEdition/> } />
              

              <Route path="/supplier" element={ <SupplierList/> } />
              <Route path="/supplier-edition" element={ <SupplierEdition/> } />
          </Routes>
  
      </BrowserRouter>
    );
  };
  