import Layout from "./pages/Layout";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import "./App.css";
import ApproveList from "./pages/approve/ApproveList"
import UserList from "./pages/users/UserList";
import ITAssets from "./pages/itassets/ITAssets";
import ApproveHandleList from "./pages/approve/ApproveHandleList"
import LoginHome from "./pages/login/LoginHome";

function App() {

    return (
          
          <BrowserRouter>

              <Header/>
              <Sidebar/>
              
              <Routes>

                  <Route path="/approve" element={<ApproveList/>}/>
                  <Route path="/approveHandle" element={<ApproveHandleList/>}/>
                  <Route path="/users" element={<UserList/>}/>
                  <Route path="/itassets" element={<ITAssets/>}/>
                  <Route path="/login" element={<LoginHome/>}/>

                  
              </Routes>
          </BrowserRouter>

    );
}

export default App;
