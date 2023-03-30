import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomerList, EmployeeList, IndexPage, SupplierList } from "../pages";

export const Navigation: React.FC = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element ={ <IndexPage/> }/>
              <Route path="/customer" element={ <CustomerList/> } />
              <Route path="/employee" element={ <EmployeeList/> } />
              <Route path="/supplier" element={ <SupplierList/> } />
          </Routes>
  
      </BrowserRouter>
    );
  };
  