import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Customer, Employee, IndexPage, Supplier } from "../pages";

export const Navigation: React.FC = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element ={ <IndexPage/> }/>
              <Route path="/customer" element={ <Customer/> } />
              <Route path="/employee" element={ <Employee/> } />
              <Route path="/supplier" element={ <Supplier/> } />
          </Routes>
  
      </BrowserRouter>
    );
  };
  