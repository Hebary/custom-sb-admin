import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { IndexPage } from "../pages";
import logo from '../assets/react.svg';

export const Navigation: React.FC = () => {
    return (
      <BrowserRouter>
        <div className="">
          <nav>
            <img src={logo} alt='react-logo' style={{ marginTop:12 }} />
            <ul>
              <li>
                <NavLink className={({isActive})=> isActive ? 'nav-active':''}  to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={({isActive})=> isActive ? 'nav-active':''}  to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className={({isActive})=> isActive ? 'nav-active':''}  to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
  
          <Routes>
              <Route path="/" element ={ <IndexPage/> }/>
              {/* <Route path="/" element={ <>Shopping Page</> } /> */}
              {/* <Route path="/lazy" element={ <>Users</> }/> */}
              {/* <Route path="/*" element={ <Navigate to="lazy-1" replace/> }/> */}
          </Routes>
  
        </div>
      </BrowserRouter>
    );
  };
  