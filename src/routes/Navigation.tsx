import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "../pages";

export const Navigation: React.FC = () => {
    return (
      <BrowserRouter>
  
          <Routes>
              <Route path="/" element ={ <IndexPage/> }/>
              {/* <Route path="/" element={ <>Shopping Page</> } /> */}
              {/* <Route path="/lazy" element={ <>Users</> }/> */}
              {/* <Route path="/*" element={ <Navigate to="lazy-1" replace/> }/> */}
          </Routes>
  
      </BrowserRouter>
    );
  };
  